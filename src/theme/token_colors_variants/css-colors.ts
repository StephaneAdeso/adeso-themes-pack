import { Palette } from "../palette.enum";

export default [
  {
    name: "CSS Class and Support",
    scope: [
      "source.css support.type.property-name",
      "source.sass support.type.property-name",
      "source.scss support.type.property-name",
      "source.less support.type.property-name",
      "source.stylus support.type.property-name",
      "source.postcss support.type.property-name",
    ],
    settings: {
      foreground: Palette.Blue_turquoise,
    },
  },
  {
    name: "CSS attributes name id",
    scope: ["entity.other.attribute-name.id.css"],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
  {
    name: "CSS property names",
    scope: ["support.type.property-name.css"],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
  {
    name: "CSS string",
    scope: ["string.quoted.double.css", "string.quoted.single.css"],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "CSS rgb value hex",
    scope: ["constant.other.color.rgb-value.hex.css"],
    settings: {
      foreground: Palette.White_regular,
    },
  },
  {
    name: "CSS variable",
    scope: ["variable.css", "variable.argument.css"],
    settings: {
      foreground: Palette.Blue_turquoise,
    },
  },
  {
    name: "CSS names ",
    scope: [
      "entity.other.attribute-name.class.css",
      "entity.other.attribute-name.pseudo-class.css",
      "entity.other.attribute-name.id.css",
      "keyword.control.at-rule.font-face.css",
    ],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "CSS Classes",
    scope: ["entity.other.attribute-name.class"],
    settings: {
      foreground: "#FFCB6B",
    },
  },
  {
    name: "CSS ID's",
    scope: ["source.sass keyword.control"],
    settings: {
      foreground: "#82AAFF",
    },
  },
];
