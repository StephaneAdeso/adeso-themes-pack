import { Palette } from "../palette.enum";

export default [
  {
    name: "JSON Key - string double quoted",
    scope: ["string.quoted.double.json", "string.quoted.single.json"],
    settings: {
      foreground: Palette.Yello_light,
    },
  },
  {
    name: "JSON Key - Level 0",
    scope: [
      "source.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "JSON Key - Level 1",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Blue_turquoise,
    },
  },
  {
    name: "JSON Key - Level 2",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
  {
    name: "JSON Key - Level 3",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Green_bright,
    },
  },
  {
    name: "JSON Key - Level 4",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: "#006fff",
    },
  },
  {
    name: "JSON Key - Level 5",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Pink_bright,
    },
  },
  {
    name: "JSON Key - Level 6",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Blue_turquoise,
    },
  },
  {
    name: "JSON Key - Level 7",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Violet_dark,
    },
  },
  {
    name: "JSON Key - Level 8",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Green_bright,
    },
  },
];
