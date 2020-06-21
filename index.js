const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { palettes } = require("./data");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/palettes", (req, res) => {
  const { search } = req.query;

  if (search) {
    res.send(
      palettes.filter((p) =>
        p.paletteName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
  res.send(palettes);
});

app.get("/palettes/:id", (req, res) => {
  const { id } = req.params;

  const palette = palettes.find((r) => String(r.id) === String(id));

  if (palette) {
    res.send(palette);
  }

  res.status(404).send("Not found");
});

app.post("/palettes", (req, res) => {
  const { body } = req;

  if (!body.paletteName) {
    return res.status(422).send("Parameter paletteName is required");
  }

  if (!body.colors || !Array.isArray(body.colors) || body.colors.length < 3) {
    return res.status(422).send("Add at least 3 colors");
  }

  if (body.colors.find((color) => !color.colorName || !color.hexCode)) {
    return res.status(422).send("Each color must have a colorName and hexCode");
  }

  const palette = {
    id: palettes.length,
    name: body.paletteName,
    colors: body.colors,
  };

  palettes.push(palette);

  res.status(201).send(palette);
});

app.listen(port, () =>
  console.log(`Beautiful color palettes waiting for you at port ${port}!`)
);
