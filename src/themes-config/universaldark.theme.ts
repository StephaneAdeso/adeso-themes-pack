import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";


const background = "#1a1716";
const secondaryBackground = Color(background).lighten(0.2).hexa()

export const getTheme = (): Theme => {
  return new Theme("Universaldark", ThemeTypes.DARK, {
    /* -----------------------------
    -       Exclusive UI Colors    -
    ----------------------------- */
    background: background,
    inlineHintBackground: secondaryBackground,
    lineSeparator: "#2c2c2c",
    activityBarcActiveIcon: "#CC6677",
    activityBarIcons: "#444444",
    lineActiveNumber: "#CC6677",
    lineNumbersRulers: "#333333",
    listActiveItem: "#2cc2f04b",
    menuBackground: secondaryBackground,
    menuHoverBackground: "#CC66774b",
    quickInputBackground: secondaryBackground,
    windowResizeline: "#CC6677",
    scrollbarButtonBackground: "#2c2c2c",
    tabsBackground: "#BEE7FB17",
    tabsBorders: "#CC6677",

    /* -----------------------------
    -       Primary colors    -
    ----------------------------- */

    variable: "#DDDDDD",
    comment: "#6e6e6e",
    type: "#CC6677",
    typePrimitive: "#CC6677",
    function: "#999933",
    keyword: "#88CCEE",
    punctuation: "#AA4499", // And operators #88CCEE #CC6677 #44AA99 #999933 #AA4499 #1f1f1f 
    usedProperties: "#44AA99",

    /* -----------------------------
    -       Secondary colors    -
    ----------------------------- */

    string: "#DDCC77",
    numeric: "#6f5ccc",
    boolean: "#75c95c",
  });
};
