import { Palette } from "../palette.enum";

export default [
  {
    name: "PYTHON string",
    scope: ["string.quoted.double.python", "string.quoted.single.python"],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "PYTHON meta attributes",
    scope: ["meta.attribute.python"],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
  {
    name: "PYTHON special keys",
    scope: ["variable.parameter.function.language.special"], // TODO: check if need to move to generic
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "PYTHON constant language (booleans)",
    scope: ["constant.language.python"],
    settings: {
      foreground: Palette.Violet_light,
    },
  },
];
