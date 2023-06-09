import { Palette } from "../palette.enum";

/** colors that affects more than 1 language */
export default [
  {
    name: "Operator, Misc",
    scope: [
      "constant.other.color",
      "punctuation",
      "meta.tag",
      "punctuation.definition.tag",
      "punctuation.separator.inheritance.php",
      "punctuation.definition.tag.html",
      "punctuation.definition.tag.begin.html",
      "punctuation.definition.tag.end.html",
      "punctuation.section.embedded",
      "keyword.other.template",
      "keyword.other.substitution",
    ],
    settings: {
      foreground: Palette.Yello_goldish,
    },
  },
  {
    name: "Tag",
    scope: ["entity.name.tag", "meta.tag.sgml", "markup.deleted.git_gutter"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "Function, Special Method",
    scope: [
      "entity.name.function",
      "meta.function-call",
      "variable.function",
      "support.function",
      "keyword.other.special-method",
    ],
    settings: {
      foreground: Palette.Green_bright,
    },
  },
  {
    name: "Number, numeric",
    scope: ["constant.numeric"],
    settings: {
      foreground: Palette.Blue_light,
    },
  },
  {
    name: "Boolean",
    scope: ["constant.language.boolean"],
    settings: {
      foreground: Palette.Violet_light,
    },
  },
  {
    name: "String, Symbols, Inherited Class, MARKDOWN Heading",
    scope: [
      "string",
      "constant.other.symbol",
      "constant.other.key",
      "entity.other.inherited-class",
      "markup.heading",
      "markup.inserted.git_gutter",
      "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js",
    ],
    settings: {
      foreground: Palette.White_regular,
    },
  },
  {
    name: "Class, Support",
    scope: [
      "entity.name",
      "support.class",
      "support.other.namespace.use.php",
      "meta.use.php",
      "support.other.namespace.php",
      "markup.changed.git_gutter",
      "support.type.sys-types",
    ],
    settings: {
      foreground: Palette.White_regular,
    },
  },
  {
    name: "Entity name type",
    scope: [
      "entity.name.type",
      "entity.name.type",
      "entity.name.type",
      "entity.name.type",
    ],
    settings: {
      foreground: Palette.Blue_turquoise,
    },
  },
  {
    name: "Entity Types",
    scope: ["support.type", "storage.type.primitive"],
    settings: {
      foreground: Palette.Blue_navy,
    },
  },
  {
    name: "Storage Type object",
    scope: ["storage.type.object"],
    settings: {
      foreground: Palette.Blue_turquoise,
    },
  },
  {
    name: "Language methods",
    scope: ["variable.language"],
    settings: {
      fontStyle: "italic",
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "Attributes",
    scope: ["entity.other.attribute-name"],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
  {
    name: "Inserted",
    scope: ["markup.inserted"],
    settings: {
      foreground: Palette.Green_others,
    },
  },
  {
    name: "Deleted",
    scope: ["markup.deleted"],
    settings: {
      foreground: Palette.Red_others,
    },
  },
  {
    name: "Changed",
    scope: ["markup.changed"],
    settings: {
      foreground: Palette.Orange_others,
    },
  },
  {
    name: "Regular Expressions",
    scope: ["string.regexp"],
    settings: {
      foreground: Palette.Blue_light,
    },
  },
  {
    name: "Escape Characters",
    scope: ["constant.character.escape"],
    settings: {
      foreground: Palette.Blue_light,
    },
  },
  {
    name: "URL",
    scope: ["*url*", "*link*", "*uri*"],
    settings: {
      fontStyle: "underline",
    },
  },
  {
    name: "Comment",
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      fontStyle: "italic",
      foreground: Palette.Grey_bright,
    },
  },
  {
    name: "Variables",
    scope: ["variable", "string constant.other.placeholder"],
    settings: {
      foreground: Palette.White_regular,
    },
  },
  {
    name: "Block Level Variables",
    scope: ["meta.block variable.other"],
    settings: {
      foreground: Palette.White_regular,
    },
  },
  {
    name: "Other Variable, String Link",
    scope: ["support.other.variable", "string.other.link"],
    settings: {
      foreground: Palette.Orange_salmon,
    },
  },
  {
    name: "Variable other property",
    scope: ["variable.other.property"],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
  {
    name: "Constant, Function Argument, Tag Attribute, Embedded",
    scope: [
      "constant.language",
      "support.constant",
      "constant.character",
      "constant.escape",
      "keyword.other.unit",
      "keyword.other",
    ],
    settings: {
      foreground: Palette.White_regular,
    },
  },
  {
    name: "Variable parameter",
    scope: ["variable.parameter"],
    settings: {
      foreground: Palette.White_regular,
    },
  },
  {
    name: "Colors",
    scope: ["constant.other.color"],
    settings: {
      foreground: Palette.White_regular,
    },
  },
  {
    name: "Invalid",
    scope: ["invalid", "invalid.illegal"],
    settings: {
      foreground: Palette.Orange_salmon,
    },
  },
  {
    name: " Storage modifier",
    scope: ["storage.modifier"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "Storage type",
    scope: ["storage.type"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "Keyword",
    scope: ["keyword", "keyword.operator.new"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "Keyword operators",
    scope: ["keyword.operator"],
    settings: {
      foreground: Palette.Yello_goldish,
    },
  },
  {
    name: "keyword control",
    scope: ["keyword.control"],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
];
