import { Palette } from "../palette.enum";

export default [
  {
    name: "RUST string",
    scope: ["string.quoted.double.rust", "string.quoted.single.rust"],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "RUST boolean",
    scope: ["constant.language.bool.rust"],
    settings: {
      foreground: Palette.Violet_light,
    },
  },
  {
    name: "RUST keywords",
    scope: ["keyword.other.rust", "keyword.other.fn.rust"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
];
