import { resolve } from "path";
import { createReadStream } from "fs";
import { pipeline } from "stream/promises";
import { Transform } from "stream";

export async function cat([pathToFile]) {
  const resolvedPath = resolve(pathToFile);
  const readStream = createReadStream(resolvedPath);

  const transformStream = new Transform({
    transform(chunk, _, cb) {
      console.log(chunk.toString());

      cb();
    },
  });

  await pipeline(readStream, transformStream);
}
