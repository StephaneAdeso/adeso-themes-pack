import * as fs from "fs";
import { jsonString as monodark } from "./themes/monodark/index";

fs.writeFileSync(
  `${__dirname}\\..\\themes\\Adeso-Monodark-color-theme.json`,
  monodark
);

//TODO: Simplify Boolean
//TODO: Learn how to debug different themes in the same Theme pack
//TODO: change github account name to "adeso"
//TODO: change github project and change in package
//TODO: Change documentation and colors
//TODO: Change themes in package
//TODO: Create new logo
//TODO: Update Readme
//TODO: Create Wiki
//TODO: Create Github page
// TODO: look in documentation where to use publisher and organization in package.json