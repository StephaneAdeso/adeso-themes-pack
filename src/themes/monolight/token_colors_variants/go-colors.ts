import { Palette } from "../palette.enum";

export default [
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
