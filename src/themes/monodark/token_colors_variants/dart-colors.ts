import { Palette } from "../palette.enum";

export default [
  {
    name: "DART entities",
    scope: ["support.class.dart"],
    settings: {
      foreground: Palette.Type,
    },
  },
  {
    name: "DART boolean",
    scope: ["constant.language.dart"],
    settings: {
      foreground: Palette.Boolean,
    },
  },
];
