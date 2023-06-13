import { Palette } from "../interfaces/palette-int";

export function geMarkdownColors(palette: Palette) {
  return [
    {
      name: "MARKDOWN Section name. Titles",
      scope: ["entity.name.section.markdown"],
      settings: {
        foreground: palette.Keyword,
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
        foreground: palette.Used_properties,
      },
    },
    {
      name: "MARKDOWN Links",
      scope: [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown",
      ],
      settings: {
        foreground: palette.Type,
      },
    },
    {
      name: "MARKDOWN Fenced block. Notes",
      scope: ["markup.fenced_code.block.markdown"],
      settings: {
        foreground: palette.Function,
      },
    },
  ];
}
