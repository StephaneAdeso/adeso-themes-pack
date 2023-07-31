import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

export const getTheme = (): Theme => {
  return new Theme("Monodark", ThemeTypes.DARK, {
    /* -----------------------------
        -       Exclusive UI Colors    -
        ----------------------------- */
    background: "#252525",
    inlineHintBackground: Color("#252525").lighten(0.2).hexa(),
    lineSeparator: "#343434",
    activityBarIcons: "#dbdbdb7c",
    activityBarcActiveIcon: "#22c0f0",
    lineNumbersRulers: "#444444",
    lineActiveNumber: "#ae5dff",
    listActiveItem: "#2cc2f04b",
    menuBackground: "#22c0f04b",
    tabsBackground: "#ff006a17",
    tabsBorders: "#f1438c",

    /* -----------------------------
        -       Primary colors    -
        ----------------------------- */

    variable: "#d3d3d3",
    comment: "#6e6e6e",
    type: "#22c0f0",
    typePrimitive: "#437fff",
    function: "#56cc1f",
    keyword: "#f1438c",
    punctuation: "#f69608", // And operators
    usedProperties: "#ae5dff",

    /* -----------------------------
        -       Secondary colors    -
        ----------------------------- */

    string: "#e6d08e",
    numeric: "#a9dff0",
    boolean: "#c09ad9",
  });
};
