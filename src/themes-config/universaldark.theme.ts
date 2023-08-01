import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";


const background = "#1a1716";
const secondaryBackground = Color(background).lighten(0.2).hexa()
const selectedItemBackground = "#CC66774b";

export const getTheme = (): Theme => {
  return new Theme("Universaldark", ThemeTypes.DARK, {
    ui: {
      activityBar: {
        ActiveIcon: "#CC6677",
        inactiveIcons: "#444444",
      },
      /** main menus and pop windows like command palette */
      menus: {
        background: secondaryBackground,
        hoverBackground: selectedItemBackground,
        quickInputBackground: secondaryBackground,
        quickInputListBackground: selectedItemBackground,
      },
      /** trees and list windows */
      trees: {
        activeItem: selectedItemBackground,
      },
      editorWindow: {
        inlineHintBackground: secondaryBackground,
        lineActiveNumber: "#CC6677",
        lineNumbersRulers: "#333333",
        lineSeparator: "#2c2c2c",

      },
      general: {
        mainBackground: background,
        windowResizeline: "#CC6677",
        scrollbarButtonBackground: "#2c2c2c",
      },
      tabs: {
        background: "#BEE7FB17",
        borders: "#CC6677",
      }
    },
    code: {
      boolean: "#75c95c",
      comment: "#6e6e6e",
      func: "#999933",
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
