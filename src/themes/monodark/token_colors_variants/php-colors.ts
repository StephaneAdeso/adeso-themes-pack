import { Palette } from "../palette.enum";

export default [
  {
    name: "PHP primitives",
    scope: ["keyword.other.type.php"],
    settings: {
      foreground: Palette.Type_Primitive,
    },
  },
  {
    name: "PHP boolean",
    scope: ["constant.language.php"],
    settings: {
      foreground: Palette.Boolean,
    },
  },
  {
    name: "PHP functions",
    scope: ["source.php support.function", "support.class.php"],
    settings: {
      foreground: Palette.Function,
    },
  },
];
