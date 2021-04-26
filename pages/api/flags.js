import flags from "../../data/flags";
import Plausible from "plausible-tracker";

const plausible = Plausible({
  domain: "pride.dev",
});

const { trackPageview } = Plausible();
export default (req, res) => {
  const {
    query: { search },
  } = req;

  trackPageview({ url: "/api/flags" });

  if (search) {
    res.send(
      flags.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))
    );
    return;
  }
  res.status(200).json(flags);
};
