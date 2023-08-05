import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background1 = "#1a1e27";
const background1Lighten = Color(background1).lighten(0.2).hexa();
const background1Lighten2 = Color(background1).lighten(0.4).hexa();
const foreground = "#b4b4b4";
const color1 = "#FCA311";
const color1Alpha = Color(color1).alpha(0.3).hexa();
const color1Alpha2 = Color(color1).alpha(0.15).hexa();
const color2 = "#666666";
const line1 = "#525252";
const transparent = "#00000000";

export const getTheme = (): Theme => {
  return new Theme("BananaInTheNight", ThemeTypes.DARK, {
    ui: {
      titleBar: {
        background: background1,
        foreground: foreground,
        inactiveBackground: background1Lighten2,
        inactiveForeground: foreground
      },
      activityBar: {
        activeIcon: color1,
        activeIconBorder: color1,
        background: background1,
        inactiveIcons: color2,
      },
      /** trees and list windows */
      sideBar: {
        background: background1,
        itemsForeground: foreground,
        itemsActiveSelectedForeground: foreground,
        itemsborderLine: color1,
        itemsFocusBackground: transparent,
        itemsHoverBackground: color1Alpha,
        itemsSelectedBackground: color1Alpha,
        sectionHeaderForeground: foreground,
        sectionHeaderBackground: background1,
        sectionHeaderBorder: background1,
        titleForeground: color1
      },
      statusBar: {
        barBackground: '#ff0000',
        barForeground: '#ff0000',
        iconBackground: '#ff0000'
      },
      tabs: {
        background: "#BEE7FB17",
        borders: color1,
      },
      /** main menus and pop windows like command palette */
      menus: {
        background: background1Lighten2,
        hoverBackground: color1Alpha,
        inputBackground: background1Lighten2,
        quickInputListBackground: color1Alpha,
        text: foreground,
      },
      editorPanel: {
        inlineHintBackground: background1Lighten,
        lineActiveNumber: color1,
        lineNumbersRulers: line1,
        lineSeparator: line1,
        selectedLineBorder: color1Alpha2
      },
      terminalPanel: {
        background: '#ff0000',
        Foreground: '#ff0000'
      },
      general: {
        mainBackground: background1,
        scrollbarButtonBackground: line1,
        windowResizeline: color1,
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
