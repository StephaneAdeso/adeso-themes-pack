/**
 * This file is the entry point of the theme generation system.
 * It takes the theme list and creat a JSON file for each Theme.
 * Remember to register the theme in the package.json.
 */
import * as fs from "fs";
import { Theme } from "./models/theme";
import { getTheme as eyesafedark } from "./themes-config/eyesafedark.theme";
import { getTheme as goldendark } from "./themes-config/goldendark.theme";
import { getTheme as monodark } from "./themes-config/monodark.theme";
import { getTheme as monolight } from "./themes-config/monolight.theme";
import { getTheme as universaldark } from "./themes-config/universaldark.theme";

/** retrieve all themes configurations */
const themesList: Theme[] = [
  eyesafedark(),
  goldendark(),
  monodark(),
  monolight(),
  universaldark(),
];

themesList.forEach((theme) => {
  fs.writeFileSync(
    `${__dirname}\\..\\themes\\${theme.nameValue}-color-theme.json`,
    theme.getJsonTheme()
  );
});

//TODO: Change documentation and colors
//TODO: Delete all todo's
//TODO: Update Readme
//TODO: Create Wiki
//TODO: Finish eyesafe theme
//TODO: Migrate themes to independent files.
//TODO: check if we need to create specific color for list item selected
//TODO: configure color library in project.
//TODO: Add script to clean dist and theme folders after each build.
//TODO: Try to make parameters looks good like in the image of https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula
