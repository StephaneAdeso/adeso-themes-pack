import { Palette } from "../palette.enum";

export default [
  {
    name: "MARKDOWN Section name. Titles",
    scope: ["entity.name.section.markdown"],
    settings: {
      foreground: Palette.Keyword,
    },
  },
  {
    name: "MARKDOWN Styled text",
    scope: [
      "markup.bold.markdown",
      "markup.italic.markdown",
      "markup.strikethrough.markdown",
    ],
    settings: {
      foreground: Palette.Used_properties,
    },
  },
  {
    name: "MARKDOWN Links",
    scope: [
      "markup.underline.link.markdown",
      "markup.underline.link.image.markdown",
    ],
    settings: {
      foreground: Palette.Type,
    },
  },
  {
    name: "MARKDOWN Fenced block. Notes",
    scope: ["markup.fenced_code.block.markdown"],
    settings: {
      foreground: Palette.Function,
    },
  },
];
