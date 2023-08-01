import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";


const background = "#1a1716";
const secondaryBackground = Color(background).lighten(0.2).hexa()
const selectedItemBackground = "#CC66774b";

export const getTheme = (): Theme => {
  return new Theme("Universaldark", ThemeTypes.DARK, {
    ui: {
      activityBarcActiveIcon: "#CC6677",
      activityBarIcons: "#444444",
      background: background,
      inlineHintBackground: secondaryBackground,
      lineActiveNumber: "#CC6677",
      lineNumbersRulers: "#333333",
      lineSeparator: "#2c2c2c",
      listActiveItem: selectedItemBackground,
      menuBackground: secondaryBackground,
      menuHoverBackground: selectedItemBackground,
      quickInputBackground: secondaryBackground,
      quickInputListBackground: selectedItemBackground,
      scrollbarButtonBackground: "#2c2c2c",
      tabsBackground: "#BEE7FB17",
      tabsBorders: "#CC6677",
      windowResizeline: "#CC6677"
    },
    editor: {
      boolean: "#75c95c",
      comment: "#6e6e6e",
      function: "#999933",
      keyword: "#88CCEE",
      numeric: "#6f5ccc",
      punctuation: "#AA4499", // And operators #88CCEE #CC6677 #44AA99 #999933 #AA4499 #1f1f1f 
      string: "#DDCC77",
      type: "#CC6677",
      typePrimitive: "#CC6677",
      usedProperties: "#44AA99",
      variable: "#DDDDDD",
    }
  });
};
