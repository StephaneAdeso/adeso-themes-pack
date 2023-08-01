import { Palette } from "../interfaces/palette.interface";

/** SASS files inherit 99% of CSS configs.
 * Try first fixing colos in CSS file.
 */

export function getSassColors(palette: Palette) {
  return [
    {
      name: "SASS punctuation",
      scope: ["entity.name.tag.reference.scss"],
      settings: {
        foreground: palette.editor.punctuation,
      },
    },
    {
      name: "SASS entities",
      scope: [
        "punctuation.definition.entity.css",
        "meta.at-rule.keyframes.scss entity.name.function.scss",
        "meta.at-rule.media.scss meta.property-list.media-query.scss meta.property-name.media-query.scss",
      ],
      settings: {
        foreground: palette.editor.type,
      },
    },
    {
      name: "SASS mediaqueries variables",
      scope: [
        "meta.at-rule.media.scss meta.property-list.media-query.scss meta.property-name.media-query.scss",
      ],
      settings: {
        foreground: palette.editor.usedProperties,
      },
    },
    {
      name: "SASS mediaqueries punctuation",
      scope: ["meta.at-rule.media.scss meta.property-list.media-query.scss"],
      settings: {
        foreground: palette.editor.punctuation,
      },
    },
    {
      name: "SASS mediaqueries operators",
      scope: ["meta.at-rule.media.scss keyword.control.operator.css.scss"],
      settings: {
        foreground: palette.editor.punctuation,
      },
    },
  ];
}
