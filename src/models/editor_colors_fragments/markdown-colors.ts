import { Palette } from "../interfaces/palette.interface";

export function geMarkdownColors(palette: Palette) {
  return [
    {
      name: "MARKDOWN Section name. Titles",
      scope: ["entity.name.section.markdown"],
      settings: {
        foreground: palette.keyword,
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
        foreground: palette.usedProperties,
      },
    },
    {
      name: "MARKDOWN Links",
      scope: [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown",
      ],
      settings: {
        foreground: palette.type,
      },
    },
    {
      name: "MARKDOWN Fenced block. Notes",
      scope: ["markup.fenced_code.block.markdown"],
      settings: {
        foreground: palette.function,
      },
    },
  ];
}
