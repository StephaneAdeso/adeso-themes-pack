import { Palette } from "../interfaces/palette-int";

export function getGoColors(palette: Palette) {
  return [
    {
      name: "GO primitives",
      scope: [
        "storage.type.numeric.go",
        "storage.type.boolean.go",
        "storage.type.string.go",
      ],
      settings: {
        foreground: palette.Type_Primitive,
      },
    },
    {
      name: "GO primitives",
      scope: ["support.function.go"],
      settings: {
        foreground: palette.Function,
      },
    },
  ];
}
