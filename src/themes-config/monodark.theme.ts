import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background1 = "#1f1f1f";
const background1Bright = Color(background1).lighten(0.4).hexa();
const foreground = "#b8b8b8";
const color1 = "#22c0f0";
const color1Alpha = Color(color1).alpha(0.3).hexa();
const color2 = "#eb5493";
const color2Alpha = Color(color2).alpha(0.1).hexa();
const lineColor1 = "#343434";
const lineColor1Bright = Color(lineColor1).lighten(0.3).hexa();
const transparent = "#00000000";

export const getTheme = (): Theme => {
  return new Theme("Monodark", ThemeTypes.DARK, {
    ui: {
      titleBar: {
        background: background1,
        foreground: foreground,
        inactiveBackground: background1Bright,
        inactiveForeground: foreground
      },
      activityBar: {
        activeIcon: color1,
        inactiveIcons: "#dbdbdb7c",
      },
      sideBar: {
        activeItem: color1Alpha,
        borderLine: color1,
        focusItemBackground: transparent,
        hoverItemBackground: color1Alpha,
        inactiveSelectionBackground: color1Alpha
      },
      statusBar: {
        barBackground: '#ff0000',
        barForeground: '#ff0000',
        iconBackground: '#ff0000'
      },
      tabs: {
        background: color2Alpha,
        borders: color2
      },
      menus: {
        background: background1Bright,
        hoverBackground: color1Alpha,
        inputBackground: background1Bright,
        quickInputListBackground: color1Alpha,
        text: foreground,
      },
      editorPanel: {
        inlineHintBackground: background1Bright,
        lineActiveNumber: "#ae5dff",
        lineNumbersRulers: lineColor1Bright,
        lineSeparator: lineColor1,
        selectedLineBorder: lineColor1
      },
      terminalPanel: {
        background: '#ff0000',
        Foreground: '#ff0000'
      },
      general: {
        mainBackground: background1,
        scrollbarButtonBackground: lineColor1,
        windowResizeline: color1,
      },

    },
    code: {
      boolean: "#c09ad9",
      comment: "#6e6e6e",
      func: "#56cc1f",
      keyword: color2,
      numeric: "#a9dff0",
      punctuation: "#f69608", // And operators
      string: "#e6d08e",
      type: color1,
      typePrimitive: "#437fff",
      usedProperties: "#ae5dff",
      variable: "#cfcfcf",
    }
  });
};
