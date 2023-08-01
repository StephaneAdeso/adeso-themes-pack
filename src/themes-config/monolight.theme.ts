import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#F4F2F2";
const secondaryBackground = Color(background).darken(0.04).hexa();
const selectedItemBackground = '#2cc2f04b';

export const getTheme = (): Theme => {
  return new Theme("Monolight", ThemeTypes.LIGHT, {
    ui: {
      activityBar: {
        ActiveIcon: "#00AFE4",
        inactiveIcons: "#939393",
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
        lineActiveNumber: "#ae5dff",
        lineNumbersRulers: "#B5B5B5",
        lineSeparator: "#CECECE",

      },
      general: {
        mainBackground: background,
        windowResizeline: "#00AFE4",
        scrollbarButtonBackground: "#CECECE",
      },
      tabs: {
        background: "#ff006a17",
        borders: "#f1438c",
      }
    },
    code: {
      boolean: "#0091A6",
      comment: "#7C7C7C",
      func: "#50b81f",
      keyword: "#f1438c",
      numeric: "#9C00A6",
      punctuation: "#e58800", // And operators
      string: "#8C7300",
      type: "#00AFE4",
      typePrimitive: "#0048E2",
      usedProperties: "#ae5dff",
      variable: "#2D2D2D",
    }







    /* -----------------------------
        -       Exclusive UI Colors    -
        ----------------------------- */




  });
};
