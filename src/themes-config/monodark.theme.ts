import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#1f1f1f";
const secondaryBackground = Color(background).lighten(0.2).hexa();
const selectedItemBackground = "#2cc2f04b";

export const getTheme = (): Theme => {
  return new Theme("Monodark", ThemeTypes.DARK, {
    ui: {
      activityBarcActiveIcon: "#22c0f0",
      activityBarIcons: "#dbdbdb7c",
      background: background,
      inlineHintBackground: secondaryBackground,
      lineActiveNumber: "#ae5dff",
      lineNumbersRulers: "#444444",
      lineSeparator: "#343434",
      listActiveItem: selectedItemBackground,
      menuBackground: secondaryBackground,
      menuHoverBackground: selectedItemBackground,
      quickInputBackground: secondaryBackground,
      quickInputListBackground: selectedItemBackground,
      scrollbarButtonBackground: "#343434",
      tabsBackground: "#ff006a17",
      tabsBorders: "#f1438c",
      windowResizeline: "#22c0f0",
    },
    editor: {
      boolean: "#c09ad9",
      comment: "#6e6e6e",
      function: "#56cc1f",
      keyword: "#f1438c",
      numeric: "#a9dff0",
      punctuation: "#f69608", // And operators
      string: "#e6d08e",
      type: "#22c0f0",
      typePrimitive: "#437fff",
      usedProperties: "#ae5dff",
      variable: "#d3d3d3",
    }


  });
};
