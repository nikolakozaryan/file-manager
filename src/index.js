import { stdout, stdin, chdir, exit } from "process";
import { homedir } from "os";
import { getUserName } from "./utils/getUserName.js";
import { getGoodbyeMessage } from "./utils/getGoodbyeMessage.js";
import { getWelcomeMessage } from "./utils/getWelcomeMessage.js";
import { getCurrentDirectoryMessage } from "./utils/getCurrentDirectoryMessage.js";
import { resolveCommand } from "./utils/resolveCommand.js";

chdir(homedir());

const username = getUserName();
const welcomeMessage = getWelcomeMessage(username);
const goodbyeMessage = getGoodbyeMessage(username);

stdout.write(welcomeMessage);
stdout.write(getCurrentDirectoryMessage());

stdin.on("data", resolveCommand);

process.on("SIGINT", () => {
  console.log(goodbyeMessage);
  exit();
});
