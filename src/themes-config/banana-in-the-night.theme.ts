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
        bottomBadgeBackground: color1,
        bottomBadgeForeground: background1
      },
      breadcrumbs: {
        background: background1,
        foreground: color2
      },
      minimap: {
        background: background1
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
        background: background1,
        itemsForeground: color1,
        border: color1,
        itemsHoverBackground: color1Alpha
      },
      tabs: {
        activeBackground: "#BEE7FB17",
        activeLeftAndRightBorder: transparent,
        activeBorderTop: color1,
        activeBorderBottom: color1,
        activeForeground: foreground,
        inactiveBackground: background1,
        inactiveForeground: foreground,
        unfocusedActiveForeground: foreground,
        unfocusedInactiveForeground: foreground
      },
      /** main menus and pop windows like command palette */
      menus: {
        background: background1Lighten2,
        hoverBackground: color1Alpha,
        inputBackground: background1Lighten2,
        foreground: foreground,
        buttonBackground: color1Alpha
      },
      lists: {
        listActiveSelectionBackground: color1Alpha,
        listActiveSelectionForeground: foreground,
        listFocusOutline: color1,
        listFocusKeyboardBackground: transparent,
        listItemHoverBackground: color1Alpha,
        quickInputBackground: background1Lighten2,
        quickInputForeground: foreground,
        quickInputFocusBackground: color1Alpha,
        treeIndentGuideStroke: color1
      },
      editor: {
        inlayHintBackground: background1Lighten,
        inlayHintForeground: color2,
        lineActiveNumber: color1,
        lineRulersNumbers: line1,
        scrollbarLineSeparator: transparent,
        selectedLineBorder: color1Alpha2,
        background: background1,
        groupHeaderTabsBackground: background1,
        lineNumbersColumnBackground: background1,
        activeIndentGuideColor: color1,
        foreground: foreground,
        indentGuideColor: color2,
        groupBorder: line1
      },
      panel: {
        background: background1,
        border: line1
      },
      global: {
        scrollbarButtonColor: line1,
        globalForeground: foreground,
        scrollbarShadow: transparent,
        globalFocusBorder: color1
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
