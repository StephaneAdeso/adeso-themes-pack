import { Palette } from "../interfaces/palette-int";

/** SASS files inherit 99% of CSS configs.
 * Try first fixing colos in CSS file.
 */

export function getSassColors(palette: Palette) {
  return [
    {
      name: "SASS punctuation",
      scope: ["entity.name.tag.reference.scss"],
      settings: {
        foreground: palette.Punctuation,
      },
    },
    {
      name: "SASS entities",
      scope: ["punctuation.definition.entity.css"],
      settings: {
        foreground: palette.Type,
      },
    },
  ];
}
