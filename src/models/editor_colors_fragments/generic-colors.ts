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
        foreground: palette.editor.comment,
      },
    },
    {
      name: "Storage types. classes ,const ,let etc",
      scope: ["storage.type"],
      settings: {
        foreground: palette.editor.keyword,
      },
    },
    {
      name: " Storage modifier. implements",
      scope: ["storage.modifier"],
      settings: {
        foreground: palette.editor.keyword,
      },
    },
    {
      name: " keyword. if, this, new ,etc",
      scope: ["keyword", "variable.language", "keyword.operator.new"],
      settings: {
        foreground: palette.editor.keyword,
      },
    },
    {
      name: " keyword operator. =,etc",
      scope: ["keyword.operator"],
      settings: {
        foreground: palette.editor.punctuation,
      },
    },
    {
      name: " puntuacion. {,etc",
      scope: ["punctuation", "constant.language.import-export-all"],
      settings: {
        foreground: palette.editor.punctuation,
      },
    },
    {
      name: "escaped chars",
      scope: ["constant.character.escape"],
      settings: {
        foreground: palette.editor.punctuation,
      },
    },
    {
      name: "meta.brace. (,etc",
      scope: ["meta.brace"],
      settings: {
        foreground: palette.editor.punctuation,
      },
    },
    {
      name: "entity.name .",
      scope: ["entity.name.type", "entity.other"],
      settings: {
        foreground: palette.editor.type,
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
        foreground: palette.editor.function,
      },
    },
    {
      name: "variables",
      scope: ["variable"],
      settings: {
        foreground: palette.editor.variable,
      },
    },
    {
      name: "meta.object-literal",
      scope: ["meta.object-literal"],
      settings: {
        foreground: palette.editor.variable,
      },
    },
    {
      name: "support.type",
      scope: ["support.type"],
      settings: {
        foreground: palette.editor.typePrimitive,
      },
    },
    {
      name: "String",
      scope: ["string"],
      settings: {
        foreground: palette.editor.string,
      },
    },
    {
      name: "boolean",
      scope: ["constant.language.boolean", "constant.language"],
      settings: {
        foreground: palette.editor.boolean,
      },
    },
    {
      name: "numeric",
      scope: ["constant.numeric"],
      settings: {
        foreground: palette.editor.numeric,
      },
    },
    {
      name: "Used properties",
      scope: ["variable.other.property", "variable.other.object.property"],
      settings: {
        foreground: palette.editor.usedProperties,
      },
    },
  ];
}
