import * as fs from "fs";
import { jsonString as monodark } from "./themes/monodark/index";
import { jsonString as monolight } from "./themes/monolight/index";

fs.writeFileSync(
  `${__dirname}\\..\\themes\\Adeso-Monodark-color-theme.json`,
  monodark
);
