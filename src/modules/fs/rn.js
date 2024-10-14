import { rename } from "fs/promises";
import { resolve, dirname } from "path";

export async function rn([oldPath, newPath]) {
  const oldPathResolved = resolve(oldPath);

  await rename(oldPathResolved, resolve(dirname(oldPathResolved), newPath));
}
