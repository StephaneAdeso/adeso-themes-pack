import { Palette } from "../palette.enum";

export default [
  {
    name: "MARKDOWN - Plain",
    scope: ["text.html.markdown", "punctuation.definition.list_item.markdown"],
    settings: {
      foreground: "#EEFFFF",
    },
  },
  {
    name: "MARKDOWN - Bold",
    scope: [
      "markup.bold.markdown",
      "markup.italic.markdown markup.bold.markdown",
    ],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
  {
    name: "MARKDOWN - Raw Inline",
    scope: ["text.html.markdown markup.inline.raw.markdown"],
    settings: {
      foreground: "#C792EA",
    },
  },
  {
    name: "MARKDOWN - Raw Inline Punctuation",
    scope: [
      "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown",
    ],
    settings: {
      foreground: "#65737E",
    },
  },
  {
    name: "MARKDOWN - Heading",
    scope: [
      "markdown.heading",
      "markup.heading | markup.heading entity.name",
      "markup.heading.markdown punctuation.definition.heading.markdown",
    ],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "MARKDOWN - entity name",
    scope: ["entity.name.section.markdown"],
    settings: {
      foreground: Palette.Blue_turquoise,
    },
  },
  {
    name: "MARKDOWN - inline raw",
    scope: ["markup.inline.raw.string.markdown"],
    settings: {
      foreground: Palette.Blue_light,
    },
  },
  {
    name: "MARKDOWN - code block",
    scope: ["markup.fenced_code.block.markdown"],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "MARKDOWN - Italic",
    scope: ["markup.italic", "markup.bold.markdown markup.italic.markdown"],
    settings: {
      fontStyle: "italic",
      foreground: Palette.Green_bright,
    },
  },
  {
    name: "MARKDOWN - Bold",
    scope: ["markup.bold", "markup.bold string"],
    settings: {
      fontStyle: "bold",
      foreground: "#f07178",
    },
  },
  {
    name: "MARKDOWN - Bold-Italic",
    scope: [
      "markup.bold markup.italic",
      "markup.italic markup.bold",
      "markup.quote markup.bold",
      "markup.bold markup.italic string",
      "markup.italic markup.bold string",
      "markup.quote markup.bold string",
    ],
    settings: {
      fontStyle: "bold",
      foreground: "#f07178",
    },
  },
  {
    name: "MARKDOWN - Underline",
    scope: ["markup.underline"],
    settings: {
      fontStyle: "underline",
      foreground: "#F78C6C",
    },
  },
  {
    name: "MARKDOWN - link",
    scope: [
      "markup.underline.link.image.markdown",
      "markup.underline.link.markdown",
    ],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "MARKDOWN - Blockquote",
    scope: ["markup.quote punctuation.definition.blockquote.markdown"],
    settings: {
      foreground: "#65737E",
    },
  },
  {
    name: "MARKDOWN - Quote",
    scope: ["markup.quote"],
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "MARKDOWN - Link",
    scope: ["string.other.link.title.markdown"],
    settings: {
      foreground: "#82AAFF",
    },
  },
  {
    name: "MARKDOWN - Link Description",
    scope: ["string.other.link.description.title.markdown"],
    settings: {
      foreground: "#C792EA",
    },
  },
  {
    name: "MARKDOWN - Link Anchor",
    scope: ["constant.other.reference.link.markdown"],
    settings: {
      foreground: "#FFCB6B",
    },
  },
  {
    name: "MARKDOWN - Raw Block",
    scope: ["markup.raw.block"],
    settings: {
      foreground: "#C792EA",
    },
  },
  {
    name: "MARKDOWN - Raw Block Fenced",
    scope: ["markup.raw.block.fenced.markdown"],
    settings: {
      foreground: "#00000050",
    },
  },
  {
    name: "MARKDOWN - Fenced Bode Block",
    scope: ["punctuation.definition.fenced.markdown"],
    settings: {
      foreground: "#00000050",
    },
  },
  {
    name: "MARKDOWN - Fenced Bode Block Variable",
    scope: [
      "markup.raw.block.fenced.markdown",
      "variable.language.fenced.markdown",
      "punctuation.section.class.end",
    ],
    settings: {
      foreground: "#EEFFFF",
    },
  },
  {
    name: "MARKDOWN - Fenced Language",
    scope: ["variable.language.fenced.markdown"],
    settings: {
      foreground: "#65737E",
    },
  },
  {
    name: "MARKDOWN - Separator",
    scope: ["meta.separator"],
    settings: {
      fontStyle: "bold",
      foreground: "#65737E",
    },
  },
  {
    name: "MARKDOWN - Table",
    scope: ["markup.table"],
    settings: {
      foreground: "#EEFFFF",
    },
  },
];
