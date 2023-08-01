import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#1a1e27";
const secondaryBackground = Color(background).lighten(0.2).hexa()
const selectedItemBackground = "#FCA3114b";

export const getTheme = (): Theme => {
  return new Theme("BananaInTheDark", ThemeTypes.DARK, {
    ui: {
      activityBar: {
        ActiveIcon: "#FCA311",
        inactiveIcons: "#ffbb4e7c",
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
        lineActiveNumber: "#FCA311",
        lineNumbersRulers: "#525252",
        lineSeparator: "#525252",

      },
      general: {
        mainBackground: background,
        windowResizeline: "#FCA311",
        scrollbarButtonBackground: "#525252",
      },
      tabs: {
        background: "#BEE7FB17",
        borders: "#FCA311",
      }
    },
    code: {
      boolean: "#00cecb",
      comment: "#83814e",
      func: "#94d1be",
      keyword: "#eb5e28",
      numeric: "#ffed66",
      punctuation: "#E5E5E5", // And operators
      string: "#C1AF35",
      type: "#b8dbd9",
      typePrimitive: "#63a8a6",
      usedProperties: "#7676ED",
      variable: "#FCA311",
    }
  });
};
