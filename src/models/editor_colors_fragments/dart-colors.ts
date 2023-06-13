import { Palette } from "../interfaces/palette-int";

export function getDartColors(palette: Palette) {
  return [
    {
      name: "DART entities",
      scope: ["support.class.dart"],
      settings: {
        foreground: palette.Type,
      },
    },
    {
      name: "DART boolean",
      scope: ["constant.language.dart"],
      settings: {
        foreground: palette.Boolean,
      },
    },
  ];
}
