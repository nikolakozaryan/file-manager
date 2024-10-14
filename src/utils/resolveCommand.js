import { COMMAND_EXECUTION_ERROR, COMMAND_VALIDATION_ERROR } from "../models/constants.js";
import { add } from "../modules/fs/add.js";
import { cat } from "../modules/fs/cat.js";
import { cp } from "../modules/fs/cp.js";
import { mv } from "../modules/fs/mv.js";
import { remove } from "../modules/fs/rm.js";
import { rn } from "../modules/fs/rn.js";
import { hash } from "../modules/hash/hash.js";
import { cd } from "../modules/nwd/cd.js";
import { ls } from "../modules/nwd/ls.js";
import { up } from "../modules/nwd/up.js";
import { os } from "../modules/os/os.js";
import { compress } from "../modules/zlib/compress.js";
import { decompress } from "../modules/zlib/decompress.js";
import { getCurrentDirectoryMessage } from "./getCurrentDirectoryMessage.js";
import { parseCommand } from "./parseCommand.js";
import { validateCommand } from "./validateCommand.js";

export async function resolveCommand(data) {
  const fullCommand = parseCommand(data);

  try {
    await validateCommand(fullCommand);

    switch (fullCommand.name) {
      case "up":
        up();
        break;
      case "cd":
        cd(fullCommand.args);
        break;
      case "ls":
        await ls();
        break;
      case "cat":
        await cat(fullCommand.args);
        break;
      case "add":
        await add(fullCommand.args);
        break;
      case "rn":
        await rn(fullCommand.args);
        break;
      case "cp":
        await cp(fullCommand.args);
        break;
      case "mv":
        await mv(fullCommand.args);
        break;
      case "rm":
        await remove(fullCommand.args);
        break;
      case "os":
        os(fullCommand.args);
        break;
      case "hash":
        await hash(fullCommand.args);
        break;
      case "compress":
        await compress(fullCommand.args);
        break;
      case "decompress":
        await decompress(fullCommand.args);
        break;
      case ".exit":
        process.emit("SIGINT");
    }
  } catch (err) {
    console.error(err instanceof SyntaxError ? COMMAND_VALIDATION_ERROR : COMMAND_EXECUTION_ERROR);
  } finally {
    console.log(getCurrentDirectoryMessage());
  }
}
