import { Palette } from "../palette.enum";

/** SASS files inherit 99% of CSS configs.
 * Try first fixing colos in CSS file.
 */
export default [
  {
    name: "SASS punctuation",
    scope: ["entity.name.tag.reference.scss"],
    settings: {
      foreground: Palette.Punctuation,
    },
  },
  {
    name: "SASS entities",
    scope: ["punctuation.definition.entity.css"],
    settings: {
      foreground: Palette.Type,
    },
  },
];
