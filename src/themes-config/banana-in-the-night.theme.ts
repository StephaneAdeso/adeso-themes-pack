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
        border: background1,
        foreground: foreground,
        inactiveBackground: background1Lighten2,
        inactiveForeground: foreground
      },
      activityBar: {
        activeIcon: color1,
        activeIconBorder: color1,
        background: background1,
        inactiveIcons: color2,
        border: background1,
        bottomBadgeBackground: '#ff0000',
        bottomBadgeForeground: '#ff0000'
      },
      breadcrumbs: {
        background: '#ff0000',
        foreground: '#ff0000'
      },
      minimap: {
        background: "#ff0000"
      },
      /** trees and list windows */
      sideBar: {
        background: background1,
        border: background1,
        itemsForeground: foreground,
        sectionHeaderForeground: foreground,
        sectionHeaderBackground: background1,
        sectionHeaderLineBorder: background1,
        titleForeground: color1
      },
      statusBar: {
        background: '#ff0000',
        itemsForeground: '#ff0000',
        border: '#ff0000',
        itemsHoverBackground: '#ff0000'
      },
      tabs: {
        activeBackground: "#BEE7FB17",
        activeLeftAndRightBorder: "#ff0000",
        activeBorderTop: color1,
        activeBorderBottom: color1,
        activeForeground: "#ff0000",
        inactiveBackground: background1,
        inactiveForeground: "#ff0000",
        unfocusedActiveForeground: "#ff0000",
        unfocusedInactiveForeground: '#ff0000'
      },
      /** main menus and pop windows like command palette */
      menus: {
        background: background1Lighten2,
        hoverBackground: color1Alpha,
        inputBackground: background1Lighten2,
        foreground: foreground,
        buttonBackground: '#ff0000'
      },
      lists: {
        listActiveSelectionBackground: '#ff0000',
        listActiveSelectionForeground: '#ff0000',
        listFocusOutline: '#ff0000',
        listFocusKeyboardBackground: '#ff0000',
        listItemHoverBackground: '#ff0000',
        quickInputBackground: '#ff0000',
        quickInputForeground: '#ff0000',
        quickInputFocusBackground: '#ff0000',
        treeIndentGuideStroke: '#ff0000'
      },
      editor: {
        inlayHintBackground: background1Lighten,
        inlayHintForeground: '#ff0000',
        lineActiveNumber: color1,
        lineNumbersRulers: line1,
        scrollbarLineSeparator: line1,
        selectedLineBorder: color1Alpha2,
        background: background1,
        groupHeaderTabsBackground: '#ff0000',
        lineNumbersColumnBackground: '#ff0000',
        activeIndentGuideColor: color1,
        foreground: '#ff0000',
        indentGuideColor: "#ff0000"
      },
      panel: {
        background: '#ff0000',
        border: '#ff0000'
      },
      global: {
        scrollbarButtonColor: line1,
        windowResizeline: color1,
        globalForeground: '#ff0000',
        scrollbarShadow: transparent,
        globalFocusBorder: '#ff0000'
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
