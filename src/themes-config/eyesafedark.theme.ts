import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#131111";
const secondaryBackground = Color(background).lighten(0.2).hexa()
const selectedItemBackground = "#FCA3114b";

export const getTheme = (): Theme => {
  return new Theme("EyeSafedark", ThemeTypes.DARK, {
    ui: {
      activityBar: {
        activeIcon: "#FCA311",
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
        focusItemBackground: "#ff0000", // TODO: Change this value
        hoverItemBackground: "#ff0000", // TODO: Change this value
        inactiveSelectionBackground: "#ff0000", // TODO: Change this value
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
      comment: "#777664",
      func: "#007f5f",
      keyword: "#96624a",
      numeric: "#ffed66",
      punctuation: "#ca6702", // And operators 
      string: "#C1AF35",
      type: "#168aad",
      typePrimitive: "#63a8a6",
      usedProperties: "#7676ED",
      variable: "#c7c7c7",
    }






  });
};
