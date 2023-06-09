import { Palette } from "../palette.enum";

export default [
  {
    name: "JAVA Types",
    scope: ["storage.type.java", "entity.other.inherited-class.java"],
    settings: {
      foreground: Palette.Blue_turquoise,
    },
  },
  {
    name: "JAVA string",
    scope: ["string.quoted.double.java"],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "JAVA boolean",
    scope: ["constant.language.java"],
    settings: {
      foreground: Palette.Violet_light,
    },
  },
  {
    name: "JAVA storage modifiers",
    scope: ["storage.modifier.import.java", "storage.modifier.package.java"],
    settings: {
      foreground: Palette.White_regular,
    },
  },
  {
    name: "JAVA keyword.other.package",
    scope: ["keyword.other.package.java"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "JAVA keyword other documentation javadoc",
    scope: ["keyword.other.documentation.javadoc.java"],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
  {
    name: "JAVA class key",
    scope: ["meta.class.java meta.class.identifier.java storage.modifier.java"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "JAVA storage type anotation",
    scope: ["storage.type.annotation.java"],
    settings: {
      foreground: Palette.Yello_goldish,
    },
  },
  {
    name: "JAVA property block",
    scope: ["variable.other.object.property.java"],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
  {
    name: "Java keywords",
    scope: ["keyword.other.import.java"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
];
