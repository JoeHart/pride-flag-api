import flags from "../../../../data/flags";

export default function flag(parent, args, context) {
  const { id } = args;
  return flags.find((flag) => flag.id === id);
}
