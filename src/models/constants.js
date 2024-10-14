const USERNAME_ARG_NAME = "--username";
const COMMANDS_LIST = {
  up: {},
  cd: { args: [{ type: "path_to_directory" }] },
  ls: {},
  cat: { args: [{ type: "path_to_file" }] },
  add: { args: [{ type: "string" }] },
  rn: { args: [{ type: "path_to_file" }, { type: "string" }] },
  cp: { args: [{ type: "path_to_file" }, { type: "path_to_directory" }] },
  mv: { args: [{ type: "path_to_file" }, { type: "path_to_directory" }] },
  rm: { args: [{ type: "path_to_file" }] },
  os: { args: [{ type: "param" }] },
  hash: { args: [{ type: "path_to_file" }] },
  compress: { args: [{ type: "path_to_file" }, { type: "path_to_dest" }] },
  decompress: { args: [{ type: "path_to_file" }, { type: "path_to_dest" }] },
  ".exit": { args: [] },
};

const ARGS_PARAM_OPTIONS = ["--EOL", "--cpus", "--homedir", "--username", "--architecture"];

const COMMAND_VALIDATION_ERROR = "Invalid input\n";
const COMMAND_EXECUTION_ERROR = "Operation failed\n";
const INITIAL_USERNAME_ERROR = "Please, specify the user name in format: --username='your_username'";

export {
  USERNAME_ARG_NAME,
  COMMANDS_LIST,
  COMMAND_VALIDATION_ERROR,
  COMMAND_EXECUTION_ERROR,
  ARGS_PARAM_OPTIONS,
  INITIAL_USERNAME_ERROR,
};
