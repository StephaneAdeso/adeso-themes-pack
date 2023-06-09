import * as fs from "fs";
import * as genericConfig from "./theme/generic-config";
import * as colors from "./theme/colors";
import * as tokenColors from "./theme/token-colors";

const jsonThemeFile = Object.assign(
  {},
  genericConfig.default,
  colors.default,
  tokenColors.default
);

const jsonString = JSON.stringify(jsonThemeFile, null, 2);

fs.writeFileSync(
  `${__dirname}\\..\\themes\\Adeso-Darkokai-color-theme.json`,
  jsonString
);
