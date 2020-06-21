const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { flags } = require("./flags");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/flags", (req, res) => {
  const { search } = req.query;

  if (search) {
    res.send(
      flags.filter((f) =>
        f.paletteName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }
  res.send(flags);
});

app.get("/flags/:id", (req, res) => {
  const { id } = req.params;

  const flag = flags.find((r) => String(r.id) === String(id));
  if (flag) {
    res.send(flag);
  }

  res.status(404).send("Not found");
});

app.get("/flags/:id/svg", (req, res) => {
  const { id } = req.params;

  const flag = flags.find((r) => String(r.id) === String(id));
  if (flag) {
    res.send(flag.svg);
  }

  res.status(404).send("Not found");
});

app.listen(port, () =>
  console.log(`🏳️‍🌈 Pride flags being served at port ${port}!`)
);
