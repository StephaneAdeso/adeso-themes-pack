import { Palette } from "../palette.enum";

export default [
  {
    name: "C primitives",
    scope: ["storage.type.built-in.primitive"],
    settings: {
      foreground: Palette.Blue_navy,
    },
  },
  {
    name: "C string",
    scope: ["string.quoted.double.c", "string.quoted.single.c"],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "C properties",
    scope: ["variable.other.member.c"],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
];
