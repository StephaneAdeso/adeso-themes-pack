import { Palette } from "../interfaces/palette.interface";

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
        foreground: palette.comment,
      },
    },
    {
      name: "Storage types. classes ,const ,let etc",
      scope: ["storage.type"],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: " Storage modifier. implements",
      scope: ["storage.modifier"],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: " keyword. if, this, new ,etc",
      scope: ["keyword", "variable.language", "keyword.operator.new"],
      settings: {
        foreground: palette.keyword,
      },
    },
    {
      name: " keyword operator. =,etc",
      scope: ["keyword.operator"],
      settings: {
        foreground: palette.punctuation,
      },
    },
    {
      name: " puntuacion. {,etc",
      scope: ["punctuation", "constant.language.import-export-all"],
      settings: {
        foreground: palette.punctuation,
      },
    },
    {
      name: "escaped chars",
      scope: ["constant.character.escape"],
      settings: {
        foreground: palette.punctuation,
      },
    },
    {
      name: "meta.brace. (,etc",
      scope: ["meta.brace"],
      settings: {
        foreground: palette.punctuation,
      },
    },
    {
      name: "entity.name .",
      scope: ["entity.name.type", "entity.other"],
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: "functions",
      scope: [
        "entity.name.function",
        "meta.method.declaration storage.type",
        "meta.method.declaration meta.block meta.function-call	variable.language.super",
      ],
      settings: {
        foreground: palette.function,
      },
    },
    {
      name: "variables",
      scope: ["variable"],
      settings: {
        foreground: palette.variable,
      },
    },
    {
      name: "meta.object-literal",
      scope: ["meta.object-literal"],
      settings: {
        foreground: palette.variable,
      },
    },
    {
      name: "support.type",
      scope: ["support.type"],
      settings: {
        foreground: palette.typePrimitive,
      },
    },
    {
      name: "String",
      scope: ["string"],
      settings: {
        foreground: palette.string,
      },
    },
    {
      name: "boolean",
      scope: ["constant.language.boolean", "constant.language"],
      settings: {
        foreground: palette.boolean,
      },
    },
    {
      name: "numeric",
      scope: ["constant.numeric"],
      settings: {
        foreground: palette.numeric,
      },
    },
    {
      name: "Used properties",
      scope: ["variable.other.property", "variable.other.object.property"],
      settings: {
        foreground: palette.usedProperties,
      },
    },
  ];
}
