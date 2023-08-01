import { Palette } from "../interfaces/palette.interface";

export function getPhpColors(palette: Palette) {
  return [
    {
      name: "PHP primitives",
      scope: ["keyword.other.type.php"],
      settings: {
        foreground: palette.editor.typePrimitive,
      },
    },
    {
      name: "PHP functions",
      scope: ["source.php support.function", "support.class.php"],
      settings: {
        foreground: palette.editor.function,
      },
    },
  ];
}
