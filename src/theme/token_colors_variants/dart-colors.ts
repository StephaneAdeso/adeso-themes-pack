import { Palette } from "../palette.enum";

export default [
  {
    name: "DART string",
    scope: [
      "string.interpolated.single.dart",
      "string.interpolated.double.dart",
    ],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "DART primitives",
    scope: ["support.class.dart"],
    settings: {
      foreground: Palette.Blue_navy,
    },
  },
];
