import { Palette } from "../interfaces/palette.interface";

export function getYamlColors(palette: Palette) {
  return [
    {
      name: "YAML entities",
      scope: ["entity.name.tag.yaml"],
      settings: {
        foreground: palette.code.type,
      },
    },
  ];
}
