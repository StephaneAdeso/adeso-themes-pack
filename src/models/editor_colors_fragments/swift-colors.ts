import { Palette } from "../interfaces/palette.interface";

export function getSwiftColors(palette: Palette) {
  return [
    {
      name: "SWIFT functions",
      scope: ["support.function.any-method.swift"],
      settings: {
        foreground: palette.editor.function,
      },
    },
    {
      name: "SWIFT variable",
      scope: ["variable.other.swift"],
      settings: {
        foreground: palette.editor.usedProperties,
      },
    },
    {
      name: "SWIFT variable  function parameter",
      scope: ["variable.parameter.function.swift entity.name.function.swift"],
      settings: {
        foreground: palette.editor.variable,
      },
    },
    {
      name: "SWIFT object properties",
      scope: ["support.variable.swift"],
      settings: {
        foreground: palette.editor.usedProperties,
      },
    },
  ];
}
