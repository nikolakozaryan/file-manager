import { resolve } from "path";
import { cwd, chdir } from "process";

export function up() {
  chdir(resolve(cwd(), ".."));
}
