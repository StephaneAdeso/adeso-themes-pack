/**
 * This file is the entry point of the theme generation system.
 * It takes the theme list and creat a JSON file for each Theme.
 * Remember to register the theme in the package.json.
 */
import * as fs from "fs";
import * as path from "path";
import { Theme } from "./models/theme";
import { getTheme as bananaInTheNight } from "./themes-config/banana-in-the-night.theme";
import { getTheme as monodark } from "./themes-config/monodark.theme";
import { getTheme as monolight } from "./themes-config/monolight.theme";



/** Clear dist and themes folder */
const rootFolder = path.resolve(__dirname, '..');
const distFolder = path.join(rootFolder, 'dist');
const themesFolder = path.join(rootFolder, 'themes');


const clearFolder = (path: string) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true });
  }
}

clearFolder(distFolder);
clearFolder(themesFolder);
fs.mkdirSync(distFolder);
fs.mkdirSync(themesFolder);

/** retrieve all themes configurations */
const themesList: Theme[] = [
  bananaInTheNight(),
  monodark(),
  monolight()
];

/** Create Themes JSON files */
themesList.forEach((theme) => {

  fs.writeFileSync(
    `${__dirname}\\..\\themes\\${theme.nameValue}-color-theme.json`,
    theme.getJsonTheme()
  );
});

//TODO: Change documentation and colors
//TODO: Update Readme
// TODO: Review # and . css selector color
// TODO: Review @ decorator in ts files
// TODO: check themes with extensions and indent lines off