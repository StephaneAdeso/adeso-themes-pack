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
      scope: [
        "punctuation.definition.entity.css",
        "meta.at-rule.keyframes.scss entity.name.function.scss",
        "meta.at-rule.media.scss meta.property-list.media-query.scss meta.property-name.media-query.scss",
      ],
      settings: {
        foreground: palette.Type,
      },
    },
    {
      name: "SASS mediaqueries variables",
      scope: [
        "meta.at-rule.media.scss meta.property-list.media-query.scss meta.property-name.media-query.scss",
      ],
      settings: {
        foreground: palette.Used_properties,
      },
    },
    {
      name: "SASS mediaqueries punctuation",
      scope: ["meta.at-rule.media.scss meta.property-list.media-query.scss"],
      settings: {
        foreground: palette.Punctuation,
      },
    },
    {
      name: "SASS mediaqueries operators",
      scope: ["meta.at-rule.media.scss keyword.control.operator.css.scss"],
      settings: {
        foreground: palette.Punctuation,
      },
    },
  ];
}
