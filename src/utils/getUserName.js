import { USERNAME_ARG_NAME, INITIAL_USERNAME_ERROR } from "../models/constants.js";

export function getUserName() {
  const args = process.argv.slice(2);

  const arg = args.find((arg) => arg.startsWith(USERNAME_ARG_NAME));

  if (!arg) {
    console.error(INITIAL_USERNAME_ERROR);
    process.exit();
  }

  const [, username] = arg.split("=");

  if (!username) {
    console.error(INITIAL_USERNAME_ERROR);
    process.exit();
  }

  return username;
}
