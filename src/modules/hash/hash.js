import { resolve } from "path";
import { createReadStream } from "fs";
import { pipeline } from "stream/promises";
import { createHash } from "crypto";

export async function hash([pathToFIle]) {
  const hash = createHash("sha256");
  const readStream = createReadStream(resolve(pathToFIle));

  await pipeline(readStream, hash);

  console.log(hash.digest("hex"));
}
