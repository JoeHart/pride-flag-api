import flags from "../../../../flags";

export default function flag(parent, args, context) {
  const { id } = args;
  console.log(flags);
  return flags.find((flag) => flag.id === id);
}
