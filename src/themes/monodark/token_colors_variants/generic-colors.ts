import { Palette } from "../palette.enum";

/** colors that affects more than 1 language. Based and checked on
 * typescript files.
 */
export default [
  {
    name: "Comment",
    scope: ["comment", "punctuation.definition.comment"],
    settings: {
      fontStyle: "italic",
      foreground: Palette.Comment,
    },
  },
  {
    name: "Storage types. classes ,const ,let etc",
    scope: ["storage.type"],
    settings: {
      foreground: Palette.Keyword,
    },
  },
  {
    name: " Storage modifier. implements",
    scope: ["storage.modifier"],
    settings: {
      foreground: Palette.Keyword,
    },
  },
  {
    name: " keyword. if, this, new ,etc",
    scope: ["keyword", "variable.language", "keyword.operator.new"],
    settings: {
      foreground: Palette.Keyword,
    },
  },
  {
    name: " keyword operator. =,etc",
    scope: ["keyword.operator"],
    settings: {
      foreground: Palette.Punctuation,
    },
  },
  {
    name: " puntuacion. {,etc",
    scope: ["punctuation", "constant.language.import-export-all"],
    settings: {
      foreground: Palette.Punctuation,
    },
  },
  {
    name: "escaped chars",
    scope: ["constant.character.escape"],
    settings: {
      foreground: Palette.Punctuation,
    },
  },
  {
    name: "meta.brace. (,etc",
    scope: ["meta.brace"],
    settings: {
      foreground: Palette.Punctuation,
    },
  },
  {
    name: "entity.name .",
    scope: ["entity.name.type", "entity.other"],
    settings: {
      foreground: Palette.Type,
    },
  },
  {
    name: "functions",
    scope: ["entity.name.function"],
    settings: {
      foreground: Palette.Function,
    },
  },
  {
    name: "variables",
    scope: ["variable"],
    settings: {
      foreground: Palette.Variable,
    },
  },
  {
    name: "meta.object-literal",
    scope: ["meta.object-literal"],
    settings: {
      foreground: Palette.Variable,
    },
  },
  {
    name: "support.type",
    scope: ["support.type"],
    settings: {
      foreground: Palette.Type_Primitive,
    },
  },
  {
    name: "String",
    scope: ["string"],
    settings: {
      foreground: Palette.String,
    },
  },
  {
    name: "boolean",
    scope: ["constant.language.boolean"],
    settings: {
      foreground: Palette.Boolean,
    },
  },
  {
    name: "numeric",
    scope: ["constant.numeric"],
    settings: {
      foreground: Palette.Numeric,
    },
  },
  {
    name: "Used properties",
    scope: ["variable.other.property", "variable.other.object.property"],
    settings: {
      foreground: Palette.Used_properties,
    },
  },
];
