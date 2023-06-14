import * as fs from "fs";
import { themesList } from "./themes-list";

themesList.forEach((theme) => {
  fs.writeFileSync(
    `${__dirname}\\..\\themes\\${theme.nameValue}-color-theme.json`,
    theme.getJsonTheme()
  );
});

//TODO: Simplify Boolean
//TODO: Learn how to debug different themes in the same Theme pack
//TODO: change github account name to "adeso"
//TODO: change github project and change in package
//TODO: Change documentation and colors
//TODO: Create new logo
//TODO: Update Readme
//TODO: Create Wiki
//TODO: Create Github page
// TODO: look in documentation where to use publisher and organization in package.json
//TODO: check how i establish the backgroud and foreground generic color https://www.youtube.com/watch?v=QCqWzb-9Sy8 10:48
// Try to make parameters looks good like in the image of https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula
