import { Palette } from "../interfaces/palette-int";

/** SASS files inherit 99% of CSS configs. So check this file before
 * altering the sass-colors.ts file
 */
export function getTypescriptColors(palette: Palette) {
  return [
    {
      name: "functions",
      scope: ["variable.language.super.ts"],
      settings: {
        foreground: palette.Function,
      },
    },
  ];
}
