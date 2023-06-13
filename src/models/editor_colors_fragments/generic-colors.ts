import { Palette } from "../interfaces/palette-int";

/** colors that affects more than 1 language. Based and checked on
 * typescript files.
 */
export function getGenericColors(palette: Palette) {
  return [
    {
      name: "Comment",
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        fontStyle: "italic",
        foreground: palette.Comment,
      },
    },
    {
      name: "Storage types. classes ,const ,let etc",
      scope: ["storage.type"],
      settings: {
        foreground: palette.Keyword,
      },
    },
    {
      name: " Storage modifier. implements",
      scope: ["storage.modifier"],
      settings: {
        foreground: palette.Keyword,
      },
    },
    {
      name: " keyword. if, this, new ,etc",
      scope: ["keyword", "variable.language", "keyword.operator.new"],
      settings: {
        foreground: palette.Keyword,
      },
    },
    {
      name: " keyword operator. =,etc",
      scope: ["keyword.operator"],
      settings: {
        foreground: palette.Punctuation,
      },
    },
    {
      name: " puntuacion. {,etc",
      scope: ["punctuation", "constant.language.import-export-all"],
      settings: {
        foreground: palette.Punctuation,
      },
    },
    {
      name: "escaped chars",
      scope: ["constant.character.escape"],
      settings: {
        foreground: palette.Punctuation,
      },
    },
    {
      name: "meta.brace. (,etc",
      scope: ["meta.brace"],
      settings: {
        foreground: palette.Punctuation,
      },
    },
    {
      name: "entity.name .",
      scope: ["entity.name.type", "entity.other"],
      settings: {
        foreground: palette.Type,
      },
    },
    {
      name: "functions",
      scope: ["entity.name.function"],
      settings: {
        foreground: palette.Function,
      },
    },
    {
      name: "variables",
      scope: ["variable"],
      settings: {
        foreground: palette.Variable,
      },
    },
    {
      name: "meta.object-literal",
      scope: ["meta.object-literal"],
      settings: {
        foreground: palette.Variable,
      },
    },
    {
      name: "support.type",
      scope: ["support.type"],
      settings: {
        foreground: palette.Type_Primitive,
      },
    },
    {
      name: "String",
      scope: ["string"],
      settings: {
        foreground: palette.String,
      },
    },
    {
      name: "boolean",
      scope: ["constant.language.boolean"],
      settings: {
        foreground: palette.Boolean,
      },
    },
    {
      name: "numeric",
      scope: ["constant.numeric"],
      settings: {
        foreground: palette.Numeric,
      },
    },
    {
      name: "Used properties",
      scope: ["variable.other.property", "variable.other.object.property"],
      settings: {
        foreground: palette.Used_properties,
      },
    },
  ];
}
