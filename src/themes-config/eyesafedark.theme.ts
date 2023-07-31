import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#131111";
const secondaryBackground = Color(background).lighten(0.2).hexa()

export const getTheme = (): Theme => {
  return new Theme("EyeSafedark", ThemeTypes.DARK, {
    /* -----------------------------
    -       Exclusive UI Colors    -
    ----------------------------- */
    background: background,
    inlineHintBackground: secondaryBackground,
    lineSeparator: "#525252",
    activityBarcActiveIcon: "#FCA311",
    activityBarIcons: "#ffbb4e7c",
    lineActiveNumber: "#FCA311",
    lineNumbersRulers: "#525252",
    listActiveItem: "#FCA3114b",
    menuBackground: secondaryBackground,
    menuHoverBackground: "#FCA31117",
    quickInputBackground: secondaryBackground,
    windowResizeline: "#FCA311",
    scrollbarButtonBackground: "#CECECE",
    tabsBackground: "#BEE7FB17",
    tabsBorders: "#FCA311",

    /* -----------------------------
    -       Primary colors    -
    ----------------------------- */

    variable: "#c7c7c7", //[x]
    comment: "#777664",
    type: "#168aad",
    typePrimitive: "#63a8a6",
    function: "#007f5f",
    keyword: "#96624a",
    punctuation: "#ca6702", // And operators //[x]
    usedProperties: "#7676ED",

    /* -----------------------------
    -       Secondary colors    -
    ----------------------------- */

    string: "#C1AF35", // [x]changed
    numeric: "#ffed66", // [x]changed
    boolean: "#00cecb", // [x]changed
  });
};
