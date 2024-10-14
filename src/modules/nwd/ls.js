import { readdir } from "fs/promises";

export async function ls() {
  const dirContent = await readdir(process.cwd(), { withFileTypes: true });

  const res = dirContent
    .map((file) => {
      let type = null;

      if (file.isFile()) type = "file";
      else if (file.isDirectory()) type = "directory";
      else if (file.isSymbolicLink()) type = "link";

      return {
        Name: file.name,
        Type: type,
      };
    })
    .sort((a, b) => {
      if (a.Type < b.Type) return -1;
      else if (a.Type > b.Type) return 1;
      else {
        if (a.Name < b.Name) return -1;
        else if (a.Name > b.Name) return 1;
      }
    });

  console.table(res);
}
