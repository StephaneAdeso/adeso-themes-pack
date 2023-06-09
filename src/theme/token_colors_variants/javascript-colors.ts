import { Palette } from "../palette.enum";

export default [
  {
    name: " JS Sub-methods",
    scope: [
      "entity.name.module.js",
      "variable.import.parameter.js",
      "variable.other.class.js",
    ],
    settings: {
      foreground: "#FF5370",
    },
  },
  {
    name: " JS object-literal key",
    scope: ["meta.object-literal.key.js"],
    settings: {
      foreground: Palette.White_regular,
    },
  },
  {
    name: " JS entity name method",
    scope: ["entity.name.method.js"],
    settings: {
      fontStyle: "italic",
      foreground: "#82AAFF",
    },
  },
  {
    name: "JS meta method",
    scope: [
      "meta.class-method.js entity.name.function.js",
      "variable.function.constructor", //TODO: move to generic
    ],
    settings: {
      foreground: "#82AAFF",
    },
  },
  {
    name: "JS string",
    scope: [
      "string.quoted.single.js",
      "string.quoted.double.js",
      "string.template.js",
    ],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "JS Decorators",
    scope: ["tag.decorator.js entity.name.tag.js"],
    settings: {
      fontStyle: "italic",
      foreground: "#82AAFF",
    },
  },
  {
    name: "JS async",
    scope: ["storage.modifier.async.js"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "JS ES7 Bind Operator",
    scope: ["source.js constant.other.object.key.js string.unquoted.label.js"],
    settings: {
      fontStyle: "italic",
      foreground: "#FF5370",
    },
  },
];
