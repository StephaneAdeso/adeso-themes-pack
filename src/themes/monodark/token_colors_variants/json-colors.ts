import { Palette } from "../palette.enum";

export default [
  {
    name: "JSON boolean",
    scope: ["constant.language.json"],
    settings: {
      foreground: Palette.Boolean,
    },
  },
  {
    name: "JSON Key - Level 0",
    scope: [
      "source.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Keyword,
    },
  },
  {
    name: "JSON Key - Level 1",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Used_properties,
    },
  },
  {
    name: "JSON Key - Level 2",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Type_Primitive,
    },
  },
  {
    name: "JSON Key - Level 3",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Type,
    },
  },
  {
    name: "JSON Key - Level 4",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Function,
    },
  },
  {
    name: "JSON Key - Level 5",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Keyword,
    },
  },
  {
    name: "JSON Key - Level 6",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Used_properties,
    },
  },
  {
    name: "JSON Key - Level 7",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Type_Primitive,
    },
  },
  {
    name: "JSON Key - Level 8",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Type,
    },
  },
  {
    name: "JSON Key - Level 9",
    scope: [
      "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json string.json support.type.property-name.json",
    ],
    settings: {
      foreground: Palette.Function,
    },
  },
];
