import { Palette } from "../interfaces/palette.interface";

export function getDartColors(palette: Palette) {
  return [
    {
      name: "DART entities",
      scope: ["support.class.dart"],
      settings: {
        foreground: palette.Type,
      },
    },
  ];
}
