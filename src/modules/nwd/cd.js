import { resolve } from "path";

export function cd([path]) {
  process.chdir(resolve(path));
}
