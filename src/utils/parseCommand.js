export function parseCommand(input) {
  const [name, ...args] = input
    .toString()
    .split(" ")
    .map((item) => item.trim());

  return { name, args };
}
