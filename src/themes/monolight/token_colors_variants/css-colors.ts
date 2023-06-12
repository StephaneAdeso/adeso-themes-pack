import { Palette } from "../palette.enum";

/** SASS files inherit 99% of CSS configs */
export default [
  {
    name: "CSS functions",
    scope: ["source.css support.function"],
    settings: {
      foreground: Palette.Function,
    },
  },
  {
    name: "CSS properties",
    scope: ["source.css variable"],
    settings: {
      foreground: Palette.Used_properties,
    },
  },
  {
    name: "CSS Entity name ",
    scope: ["entity.name.tag.css"],
    settings: {
      foreground: Palette.Type,
    },
  },
  {
    name: "CSS keyword ",
    scope: ["source.css keyword.operator"],
    settings: {
      foreground: Palette.Keyword,
    },
  },
  /* for Sass files */
  {
    name: "CSS attribute string ",
    scope: ["meta.attribute-selector"],
    settings: {
      foreground: Palette.String,
    },
  },
];
