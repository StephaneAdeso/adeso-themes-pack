import { Palette } from "../interfaces/palette-int";

export function getYamlColors(palette: Palette) {
  return [
    {
      name: "YAML entities",
      scope: ["entity.name.tag.yaml"],
      settings: {
        foreground: palette.Type,
      },
    },
  ];
}
