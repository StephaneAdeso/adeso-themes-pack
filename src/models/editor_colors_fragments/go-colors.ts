import { Palette } from "../interfaces/palette.interface";

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
        foreground: palette.editor.typePrimitive,
      },
    },
    {
      name: "GO primitives",
      scope: ["support.function.go"],
      settings: {
        foreground: palette.editor.function,
      },
    },
  ];
}
