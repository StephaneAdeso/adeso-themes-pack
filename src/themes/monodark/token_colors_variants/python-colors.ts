import { Palette } from "../palette.enum";

export default [
  {
    name: "PYTHON boolean",
    scope: ["constant.language.python"],
    settings: {
      foreground: Palette.Boolean,
    },
  },
  {
    name: "PYTHON keywords. self, etc",
    scope: [
      "variable.parameter.function.language.special.self.python",
      "keyword.operator.logical.python",
    ],
    settings: {
      foreground: Palette.Keyword,
    },
  },

  {
    name: "PYTHON functions",
    scope: [
      "meta.function-call.generic.python",
      "support.function.magic.python",
      "support.function.builtin.python",
    ],
    settings: {
      foreground: Palette.Function,
    },
  },
  {
    name: "PYTHON interpolated punctuation",
    scope: [
      "meta.fstring.python punctuation.definition.string string.interpolated.python string.quoted.single.python",
    ],
    settings: {
      foreground: Palette.Punctuation,
    },
  },

  {
    name: "PYTHON strings",
    scope: ["meta.fstring.python"],
    settings: {
      foreground: Palette.String,
    },
  }, // TODO: Check if this one is correct
  {
    name: "PYTHON used property",
    scope: ["meta.attribute.python"],
    settings: {
      foreground: Palette.Used_properties,
    },
  },
];
