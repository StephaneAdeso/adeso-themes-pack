import { Palette } from "../interfaces/palette.interface";

export function getTypescriptColors(palette: Palette) {
  return [
    {
      name: "functions",
      scope: ["variable.language.super.ts"],
      settings: {
        foreground: palette.code.func,
      },
    },
    {
      name: "const, let, etc keywords",
      scope: ["storage.type.ts"],
      settings: {
        foreground: palette.code.keyword,
      },
    },
  ];
}
