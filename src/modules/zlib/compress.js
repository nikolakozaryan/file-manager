import { createBrotliCompress } from "zlib";
import { resolve } from "path";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";

export async function compress([filePath, destPath]) {
  const brotliCompress = createBrotliCompress();
  const src = resolve(filePath);
  const dest = resolve(destPath);

  const [source, destination] = [createReadStream(src), createWriteStream(dest)];

  await pipeline(source, brotliCompress, destination);
}
