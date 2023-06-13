import { Palette } from "../interfaces/palette-int";

export function getGoColors(Palette: Palette) {
  return [
    {
      name: "GO primitives",
      scope: [
        "storage.type.numeric.go",
        "storage.type.boolean.go",
        "storage.type.string.go",
      ],
      settings: {
        foreground: Palette.Type_Primitive,
      },
    },
    {
      name: "GO primitives",
      scope: ["support.function.go"],
      settings: {
        foreground: Palette.Function,
      },
    },
    {
      name: "GO boolean",
      scope: ["constant.language.go"],
      settings: {
        foreground: Palette.Boolean,
      },
    },
  ];
}
