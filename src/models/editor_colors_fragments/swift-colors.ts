import { Palette } from "../interfaces/palette-int";

export function getSwiftColors(palette: Palette) {
  return [
    {
      name: "SWIFT functions",
      scope: ["support.function.any-method.swift"],
      settings: {
        foreground: palette.Function,
      },
    },
    {
      name: "SWIFT variable",
      scope: ["variable.other.swift"],
      settings: {
        foreground: palette.Used_properties,
      },
    },
    {
      name: "SWIFT variable  function parameter",
      scope: ["variable.parameter.function.swift entity.name.function.swift"],
      settings: {
        foreground: palette.Variable,
      },
    },
    {
      name: "SWIFT object properties",
      scope: ["support.variable.swift"],
      settings: {
        foreground: palette.Used_properties,
      },
    },
  ];
}
