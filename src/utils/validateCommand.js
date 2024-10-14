import { ARGS_PARAM_OPTIONS, COMMANDS_LIST } from "../models/constants.js";
import { resolve, dirname } from "path";
import { access, stat } from "fs/promises";

export async function validateCommand(command) {
  const commandSetup = COMMANDS_LIST[command.name];

  if (!commandSetup || commandSetup?.args?.length > command.args?.length) {
    throw new SyntaxError();
  }

  const argSetupWithValue = commandSetup.args?.map((item, i) => ({ ...item, value: command.args[i] })) || [];

  for (const arg of argSetupWithValue) {
    const pathArgValue = arg.type.startsWith("path") ? resolve(arg.value) : "";

    let [isFile, isDirectory] = [false, false];

    if (pathArgValue) {
      const path = arg.type === "path_to_dest" ? dirname(pathArgValue) : pathArgValue;

      try {
        await access(path);

        const fileStat = await stat(path);

        [isFile, isDirectory] = [fileStat.isFile(), fileStat.isDirectory()];
      } catch {
        throw new SyntaxError();
      }
    }

    switch (arg.type) {
      case "path_to_file":
        if (!isFile) {
          throw new SyntaxError();
        }
        break;
      case "path_to_directory":
      case "path_to_dest":
        if (!isDirectory) {
          throw new SyntaxError();
        }
        break;
      case "param":
        if (!ARGS_PARAM_OPTIONS.includes(arg.value)) {
          throw new SyntaxError();
        }
        break;
    }
  }
}
