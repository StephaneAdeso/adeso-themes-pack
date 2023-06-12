import * as colors from "./colors";
import * as genericConfig from "./generic-config";
import * as tokenColors from "./token-colors";

const jsonThemeFile = Object.assign(
  {},
  genericConfig.default,
  colors.default,
  tokenColors.default
);

export const jsonString = JSON.stringify(jsonThemeFile, null, 2);
