import { Palette } from "../palette.enum";

export default [
  {
    name: "HTML Attribute name",
    scope: ["entity.other.attribute-name.html"],
    settings: {
      foreground: Palette.Blue_turquoise,
    },
  },
  {
    name: "HTML string",
    scope: ["string.quoted.double.html", "string.quoted.single.html"],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "HTML Attributes",
    scope: [
      "text.html.basic entity.other.attribute-name.html",
      "text.html.basic entity.other.attribute-name",
    ],
    settings: {
      fontStyle: "italic",
      foreground: "#FFCB6B",
    },
  },
];
