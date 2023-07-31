import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

export const getTheme = (): Theme => {
  return new Theme("Universaldark", ThemeTypes.DARK, {
    /* -----------------------------
    -       Exclusive UI Colors    -
    ----------------------------- */
    background: "#1d1b1d",
    inlineHintBackground: Color("#1d1b1d").lighten(0.2).hexa(),
    lineSeparator: "#333333",
    activityBarcActiveIcon: "#BEE7FB",
    activityBarIcons: "#444444",
    lineActiveNumber: "#BEE7FB",
    lineNumbersRulers: "#333333",
    listActiveItem: "#2cc2f04b",
    menuBackground: "#2cc2f04b",
    tabsBackground: "#BEE7FB17",
    tabsBorders: "#BEE7FB",

    /* -----------------------------
    -       Primary colors    -
    ----------------------------- */

    variable: "#ebebeb",
    comment: "#6e6e6e",
    type: "#BEE7FB",
    typePrimitive: "#C1AF35",
    function: "#BEC5FB",
    keyword: "#FBBED4",
    punctuation: "#FBE7BE", // And operators
    usedProperties: "#7676ED",

    /* -----------------------------
    -       Secondary colors    -
    ----------------------------- */

    string: "#d0efff",
    numeric: "#F18686",
    boolean: "#4CDA87",
  });
};
