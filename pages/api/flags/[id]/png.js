import flags from "../../../../data/flags";

import {svg2png} from 'svg-png-converter';

export default async (req, res) => {
  const {
    query: { id },
  } = req;

  const flag = flags.find((r) => String(r.id) === String(id) || String(r.name).toLowerCase() === String(id).toLowerCase());
  if (flag) {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `${flag.emoji != null ? flag.emoji : "🏳️‍🌈"} Delivering ${
          flag.name
        } Flag SVG!`
      );
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "image/png");

    let s = await svg2png({ 
      input: flag.svg,
      encoding: 'buffer',
      format: "png"
    });
    res.send(s);
    return;
  }
  console.warn(`🏳️‍  Flag ${id} not found!`);
  res.status(404).send("Not found");
};
