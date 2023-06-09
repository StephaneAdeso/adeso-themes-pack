import { Palette } from "../palette.enum";

export default [
  {
    name: "C# string",
    scope: ["string.quoted.double.cs", "string.quoted.single.cs"],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "C# primitives",
    scope: ["keyword.type.cs"],
    settings: {
      foreground: Palette.Blue_navy,
    },
  },
  {
    name: "CS keywords",
    scope: ["keyword.other.var.cs", "keyword.other.class.cs"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
];
