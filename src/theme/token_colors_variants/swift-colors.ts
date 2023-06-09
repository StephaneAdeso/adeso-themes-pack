import { Palette } from "../palette.enum";

export default [
  {
    name: "SWIFT string",
    scope: [
      "string.quoted.double.single-line.swift",
      "string.quoted.single.swift",
    ],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "SWIFT string",
    scope: ["keyword.other.declaration-specifier.swift "],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
];
