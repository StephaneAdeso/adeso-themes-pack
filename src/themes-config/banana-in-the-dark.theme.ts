import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background1 = "#1a1e27";
const background1Lighten = Color(background1).lighten(0.2).hexa();
const background1Lighten2 = Color(background1).lighten(0.4).hexa();
const color1 = "#FCA311";
const color1Alpha = Color(color1).alpha(0.3).hexa();
const color1Alpha2 = Color(color1).alpha(0.15).hexa();
const color3 = "#666666";
const transparent = "#00000000";

export const getTheme = (): Theme => {
  return new Theme("BananaInTheDark", ThemeTypes.DARK, {
    ui: {
      activityBar: {
        activeIcon: color1,
        inactiveIcons: color3,
      },
      /** main menus and pop windows like command palette */
      menus: {
        background: background1Lighten2,
        hoverBackground: color1Alpha,
        inputBackground: background1Lighten2,
        quickInputListBackground: color1Alpha,
        text: "#b4b4b4",
      },
      /** trees and list windows */
      trees: {
        activeItem: color1Alpha,
        borderLine: color1,
        focusItemBackground: transparent,
        hoverItemBackground: color1Alpha,
        inactiveSelectionBackground: color1Alpha,
      },
      editorWindow: {
        inlineHintBackground: background1Lighten,
        lineActiveNumber: color1,
        lineNumbersRulers: "#525252",
        lineSeparator: "#525252",
        selectedLineBorder: color1Alpha2

      },
      general: {
        mainBackground: background1,
        scrollbarButtonBackground: "#525252",
        windowResizeline: color1,
      },
      tabs: {
        background: "#BEE7FB17",
        borders: color1,
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
      variable: color1,
    }
  });
};
