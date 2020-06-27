import flags from "../../../flags";

export default (req, res) => {
  const {
    query: { id },
  } = req;

  const flag = flags.find((r) => String(r.id) === String(id));
  if (flag) {
    if (process.env.NODE_ENV === "development") {
      console.log(
        `${flag.emoji != null ? flag.emoji : "🏳️‍🌈"} Delivering ${
          flag.name
        } Flag!`
      );
    }
    res.status(200).json(flag);
    return;
  }
  console.warn(`🏳️‍  Flag ${id} not found!`);
  res.status(404).send("Not found");
};
