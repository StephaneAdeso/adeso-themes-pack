/**
 * This file is the entry point of the theme generation system.
 * It takes the theme list and creat a JSON file for each Theme.
 * Remember to register the theme in the package.json.
 */
import * as fs from "fs";
import { themesList } from "./themes-list";

themesList.forEach((theme) => {
  fs.writeFileSync(
    `${__dirname}\\..\\themes\\${theme.nameValue}-color-theme.json`,
    theme.getJsonTheme()
  );
});

//TODO: Change documentation and colors
//TODO: Update Readme
//TODO: Create Wiki
//TODO: check if we need to create specific color for list item selected
//TODO: configure color library in project.
//TODO: Try to make parameters looks good like in the image of https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula
