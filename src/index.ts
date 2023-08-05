/**
 * This file is the entry point of the theme generation system.
 * It takes the theme list and creat a JSON file for each Theme.
 * Remember to register the theme in the package.json.
 */
import * as fs from "fs";
import { Theme } from "./models/theme";
import { getTheme as bananaInTheNight } from "./themes-config/banana-in-the-night.theme";
import { getTheme as monodark } from "./themes-config/monodark.theme";
import { getTheme as monolight } from "./themes-config/monolight.theme";

/** retrieve all themes configurations */
const themesList: Theme[] = [
  bananaInTheNight(),
  monodark(),
  monolight()
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
//TODO: check background of command palette, resize window line
//TODO: Add script to clean dist and theme folders after each build.
//TODO: Create specific selector for the status bar
// TODO: Review # and . css selector color
// TODO: Review @ decorator in ts files
// TODO: check bottom status bar color
// TODO: check inactive tabs foreground in very dark background theme
// TODO: add control of background of sides windows.
// TODO: add minimap and breadcrumb customization