import { Palette } from "../interfaces/palette-int";

export function getHtmlColors(palette: Palette) {
  return [
    {
      name: "HTML Tag names",
      scope: ["entity.name.tag.html"],
      settings: {
        foreground: palette.Keyword,
      },
    },
  ];
}
