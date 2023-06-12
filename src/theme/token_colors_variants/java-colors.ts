import { Palette } from "../palette.enum";

export default [
  {
    name: "JAVA Storage modifer text. import, package,etc",
    scope: ["storage.modifier.import.java", "storage.modifier.package.java"],
    settings: {
      foreground: Palette.Variable,
    },
  },
  {
    name: "JAVA Storage type",
    scope: ["storage.type.java", "storage.type.object"],
    settings: {
      foreground: Palette.Type,
    },
  },
  {
    name: "JAVA Storage type Primitive",
    scope: ["storage.type.primitive.java", "storage.type.primitive.array.java"],
    settings: {
      foreground: Palette.Type_Primitive,
    },
  },
  {
    name: "JAVA boolean",
    scope: ["constant.language.java"],
    settings: {
      foreground: Palette.Boolean,
    },
  },
];
