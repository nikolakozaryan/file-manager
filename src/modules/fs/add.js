import { writeFile } from "fs/promises";
import { resolve } from "path";

export async function add([fileName]) {
  await writeFile(resolve(fileName), '', { flag: "wx" });
}
