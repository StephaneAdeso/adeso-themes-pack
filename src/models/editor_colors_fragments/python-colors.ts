import { Palette } from "../interfaces/palette-int";

export function getPythonColors(palette: Palette) {
  return [
    {
      name: "PYTHON keywords. self, etc",
      scope: [
        "variable.parameter.function.language.special.self.python",
        "keyword.operator.logical.python",
      ],
      settings: {
        foreground: palette.Keyword,
      },
    },

    {
      name: "PYTHON functions",
      scope: [
        "meta.function-call.generic.python",
        "meta.function-call.python support.type.python",
        "support.function.magic.python",
        "support.function.builtin.python",
      ],
      settings: {
        foreground: palette.Function,
      },
    },
    {
      name: "PYTHON interpolated punctuation",
      scope: [
        "meta.fstring.python punctuation.definition.string string.interpolated.python string.quoted.single.python",
      ],
      settings: {
        foreground: palette.Punctuation,
      },
    },

    {
      name: "PYTHON strings",
      scope: ["meta.fstring.python"],
      settings: {
        foreground: palette.String,
      },
    }, // TODO: Check if this one is correct
    {
      name: "PYTHON used property",
      scope: ["meta.attribute.python"],
      settings: {
        foreground: palette.Used_properties,
      },
    },
  ];
}
