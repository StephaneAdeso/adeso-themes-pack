import { Palette } from "../interfaces/palette-int";

export function getPhpColors(palette: Palette) {
  return [
    {
      name: "PHP primitives",
      scope: ["keyword.other.type.php"],
      settings: {
        foreground: palette.Type_Primitive,
      },
    },
    {
      name: "PHP boolean",
      scope: ["constant.language.php"],
      settings: {
        foreground: palette.Boolean,
      },
    },
    {
      name: "PHP functions",
      scope: ["source.php support.function", "support.class.php"],
      settings: {
        foreground: palette.Function,
      },
    },
  ];
}
