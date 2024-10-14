import { rm } from "fs/promises";
import { resolve } from "path";

export async function remove([pathToFile]) {
  await rm(resolve(pathToFile));
}
