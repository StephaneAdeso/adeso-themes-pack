import { Palette } from "../interfaces/palette.interface";

export function getJavaColors(palette: Palette) {
  return [
    {
      name: "JAVA Storage modifer text. import, package,etc",
      scope: ["storage.modifier.import.java", "storage.modifier.package.java"],
      settings: {
        foreground: palette.code.variable,
      },
    },
    {
      name: "JAVA Storage type",
      scope: ["storage.type.java", "storage.type.object"],
      settings: {
        foreground: palette.code.type,
      },
    },
    {
      name: "JAVA Storage type Primitive",
      scope: [
        "storage.type.primitive.java",
        "storage.type.primitive.array.java",
      ],
      settings: {
        foreground: palette.code.typePrimitive,
      },
    },
    {
      name: "JAVA functions",
      scope: ["variable.language.java "],
      settings: {
        foreground: palette.code.func,
      },
    },
  ];
}
