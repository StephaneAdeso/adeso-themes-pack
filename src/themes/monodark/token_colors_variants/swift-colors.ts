import { Palette } from "../palette.enum";

export default [
  {
    name: "SWIFT functions",
    scope: ["support.function.any-method.swift"],
    settings: {
      foreground: Palette.Function,
    },
  },
  {
    name: "SWIFT variable",
    scope: ["variable.other.swift"],
    settings: {
      foreground: Palette.Used_properties,
    },
  },
  {
    name: "SWIFT variable  function parameter",
    scope: ["variable.parameter.function.swift entity.name.function.swift"],
    settings: {
      foreground: Palette.Variable,
    },
  },
  {
    name: "SWIFT object properties",
    scope: ["support.variable.swift"],
    settings: {
      foreground: Palette.Used_properties,
    },
  },
];
