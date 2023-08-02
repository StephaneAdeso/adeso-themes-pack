import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background1 = "#d1d1d1";
const background1Darken = Color(background1).darken(0.1).hexa();
const background1Darken2 = Color(background1).darken(0.03).hexa();
const background1Lighten = Color(background1).lighten(0.1).hexa();
const color1 = "#00a2d3";
const color1Alpha = Color(color1).alpha(0.3).hexa();
const color2 = "#cf2c70";
const lineColor1 = "#e0e0e0";
const color2Alpha = Color(color2).alpha(0.1).hexa();
const text1 = "#111111";
const transparent = "#00000000";

export const getTheme = (): Theme => {
  return new Theme("Monolight", ThemeTypes.LIGHT, {
    ui: {
      activityBar: {
        activeIcon: color1,
        inactiveIcons: "#939393",
      },
      /** main menus and pop windows like command palette */
      menus: {
        background: background1Darken,
        hoverBackground: color1Alpha,
        inputBackground: background1Lighten,
        quickInputListBackground: color1Alpha,
        text: text1,
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
        inlineHintBackground: background1Darken2,
        lineActiveNumber: "#f5f3f3",
        lineNumbersRulers: "#a8a8a8",
        lineSeparator: lineColor1,
        selectedLineBorder: lineColor1

      },
      general: {
        mainBackground: background1,
        scrollbarButtonBackground: lineColor1,
        windowResizeline: color1,
      },
      tabs: {
        background: color2Alpha,
        borders: color2,
      }
    },
    code: {
      boolean: "#0091A6",
      comment: "#868686",
      func: "#389e08",
      keyword: color2,
      numeric: "#9C00A6",
      punctuation: "#ca7900", // And operators
      string: "#8C7300",
      type: color1,
      typePrimitive: "#0048E2",
      usedProperties: "#9b36ff",
      variable: "#2D2D2D",
    }







    /* -----------------------------
        -       Exclusive UI Colors    -
        ----------------------------- */




  });
};
