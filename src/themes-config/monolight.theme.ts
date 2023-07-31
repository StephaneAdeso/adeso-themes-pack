import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#F4F2F2";
const secondaryBackground = Color(background).darken(0.04).hexa();

export const getTheme = (): Theme => {
  return new Theme("Monolight", ThemeTypes.LIGHT, {
    /* -----------------------------
        -       Exclusive UI Colors    -
        ----------------------------- */
    background: background,
    inlineHintBackground: secondaryBackground,
    lineSeparator: "#CECECE",
    activityBarIcons: "#939393",
    activityBarcActiveIcon: "#00AFE4",
    lineNumbersRulers: "#B5B5B5",
    lineActiveNumber: "#ae5dff",
    listActiveItem: "#2cc2f04b",
    menuBackground: secondaryBackground,
    menuHoverBackground: "#22c0f017",
    quickInputBackground: secondaryBackground,
    scrollbarButtonBackground: "#CECECE",
    tabsBackground: "#ff006a17",
    windowResizeline: "#00AFE4",
    tabsBorders: "#f1438c",

    /* -----------------------------
        -       Primary colors    -
        ----------------------------- */

    variable: "#2D2D2D",
    comment: "#7C7C7C",
    type: "#00AFE4",
    typePrimitive: "#0048E2",
    function: "#50b81f",
    keyword: "#f1438c",
    punctuation: "#e58800", // And operators
    usedProperties: "#ae5dff",

    /* -----------------------------
        -       Secondary colors    -
        ----------------------------- */

    string: "#8C7300",
    numeric: "#9C00A6",
    boolean: "#0091A6",
  });
};
