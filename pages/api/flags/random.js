import flags from "../../../data/flags";

export default (req, res) => {

  const flag = flags[Math.floor(Math.random() * flags.length)];
  res.setHeader('Cache-Control', 'no-store');

  if (flag) {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `${flag.emoji != null ? flag.emoji : "🏳️‍🌈"} Delivering ${flag.name
        } Flag!`
      );
    }
    res.status(200).json(flag);
    return;
  }
  console.warn(`🏳️‍  Flag ${id} not found!`);
  res.status(404).send("Not found");
};
