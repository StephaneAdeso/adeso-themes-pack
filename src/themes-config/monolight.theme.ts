import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const foreground = "#111111";
const background1 = "#e0e0e0";
const menuBackground = Color(background1).darken(0.1).hexa();
const menuBackground2 = Color(background1).darken(0.2).hexa();
const background1Darken2 = Color(background1).darken(0.03).hexa();
const comments = Color(background1).darken(0.3).hexa();
const background1Lighten = Color(background1).lighten(0.1).hexa();
const color1 = "#00a2d3";
const color1Alpha = Color(color1).alpha(0.3).hexa();
const color2 = "#cf2c70";
const color2Alpha = Color(color2).alpha(0.1).hexa();
const transparent = "#00000000";


export const getTheme = (): Theme => {
  return new Theme("Monolight", ThemeTypes.LIGHT, {
    ui: {
      titleBar: {
        background: menuBackground,
        border: menuBackground,
        foreground: foreground,
        inactiveBackground: background1,
        inactiveForeground: foreground
      },
      activityBar: {
        activeIcon: color1,
        activeIconBorder: color2,
        background: menuBackground,
        border: menuBackground,
        bottomBadgeBackground: color2,
        bottomBadgeForeground: foreground,
        inactiveIcons: "#939393",
      },
      breadcrumbs: {
        background: background1,
        foreground: foreground
      },
      minimap: {
        background: background1
      },
      /** trees and list windows */
      sideBar: {
        background: menuBackground,
        border: background1,
        itemsForeground: foreground,
        sectionHeaderBackground: menuBackground,
        sectionHeaderForeground: foreground,
        sectionHeaderLineBorder: menuBackground,
        titleForeground: color1
      },
      statusBar: {
        background: background1,
        border: color2,
        itemsForeground: foreground,
        itemsHoverBackground: color1Alpha,
        debuggingBackground: null,
        debuggingBorder: null,
        debuggingForeground: foreground,
        noFolderBackground: null,
        noFolderBorder: null,
        noFolderForeground: foreground,
        offlineBackground: null,
        offlineForeground: foreground,
      },
      tabs: {
        activeBackground: color2Alpha,
        activeBorderBottom: color1,
        activeBorderTop: color1,
        activeForeground: foreground,
        activeLeftAndRightBorder: transparent,
        inactiveBackground: background1,
        inactiveForeground: foreground,
        unfocusedActiveForeground: foreground,
        unfocusedInactiveForeground: foreground
      },
      /** main menus and pop windows like command palette */
      menus: {
        background: menuBackground2,
        buttonBackground: color1Alpha,
        foreground: foreground,
        hoverBackground: color1Alpha,
        inputBackground: background1Lighten,
      },
      lists: {
        listActiveSelectionBackground: color1Alpha,
        listActiveSelectionForeground: foreground,
        listFocusKeyboardBackground: transparent,
        listFocusOutline: color1,
        listItemHoverBackground: color1Alpha,
        quickInputBackground: menuBackground,
        quickInputFocusBackground: color1Alpha,
        quickInputForeground: foreground,
        treeIndentGuideStroke: color1
      },
      editor: {
        activeIndentGuideColor: color1,
        background: background1,
        foreground: foreground,
        groupHeaderTabsBackground: background1,
        indentGuideColor: color1,
        inlayHintBackground: background1Darken2,
        inlayHintForeground: comments,
        lineActiveNumber: color2,
        lineNumbersColumnBackground: background1,
        lineRulersNumbers: "#bdbdbd",
        scrollbarLineSeparator: background1,
        selectedLineBorder: background1Darken2,
        groupBorder: menuBackground
      }
      ,
      panel: {
        background: menuBackground,
        border: menuBackground
      },
      global: {
        globalFocusBorder: color1,
        globalForeground: foreground,
        scrollbarButtonColor: menuBackground,
        scrollbarShadow: transparent
      },
    },
    code: {
      boolean: "#0091A6",
      comment: comments,
      func: "#389e08",
      keyword: color2,
      numeric: "#9C00A6",
      punctuation: "#ca7900", // And operators
      string: "#8C7300",
      type: color1,
      typePrimitive: "#0048E2",
      usedProperties: "#9b36ff",
      variable: foreground,
    }

  });
};
