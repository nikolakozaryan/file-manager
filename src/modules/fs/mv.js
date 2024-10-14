import { createReadStream, createWriteStream } from "fs";
import { rm } from "fs/promises";
import { pipeline } from "stream/promises";
import { resolve, basename } from "path";

export async function mv([pathToFile, pathToDirectory]) {
  const resolvedPathToFile = resolve(pathToFile);
  const fileName = basename(resolvedPathToFile);

  const [source, destination] = [
    createReadStream(resolvedPathToFile),
    createWriteStream(resolve(pathToDirectory, fileName)),
  ];

  await pipeline(source, destination);

  await rm(resolvedPathToFile);
}
