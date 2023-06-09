import { Palette } from "../palette.enum";

export default [
  {
    name: "PHP string",
    scope: ["string.quoted.double.php", "string.quoted.single.php"],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "PHP types",
    scope: ["keyword.other.type.php"],
    settings: {
      foreground: Palette.Blue_navy,
    },
  },
];
