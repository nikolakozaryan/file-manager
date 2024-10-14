import { EOL, cpus, homedir, arch, userInfo } from "os";

export function os([arg]) {
  switch (arg) {
    case "--EOL":
      console.log(JSON.stringify(EOL));
      break;
    case "--cpus":
      const cpusAmount = cpus().length;
      const cpusFormatted = cpus().map(({ model, speed }) => ({ model, speed: speed / 1000 }));
      console.log(`Amount of CPUs: ${cpusAmount}`);
      console.table(cpusFormatted);
      break;
    case "--homedir":
      console.log(homedir());
      break;
    case "--username":
      console.log(userInfo().username);
      break;
    case "--architecture":
      console.log(arch());
      break;
  }
}
