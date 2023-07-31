import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

export const getTheme = (): Theme => {
  return new Theme("Goldendark", ThemeTypes.DARK, {
    /* -----------------------------
    -       Exclusive UI Colors    -
    ----------------------------- */
    background: "#1a1e27",
    inlineHintBackground: Color("#0e172c").lighten(0.2).hexa(),
    lineSeparator: "#525252",
    activityBarcActiveIcon: "#FCA311",
    activityBarIcons: "#ffbb4e7c",
    lineActiveNumber: "#FCA311",
    lineNumbersRulers: "#525252",
    listActiveItem: "#FCA3114b",
    menuBackground: "#FCA31117",
    tabsBackground: "#BEE7FB17",
    tabsBorders: "#FCA311",

    /* -----------------------------
    -       Primary colors    -
    ----------------------------- */

    variable: "#FCA311",
    comment: "#83814e",
    type: "#b8dbd9",
    typePrimitive: "#63a8a6",
    function: "#94d1be",
    keyword: "#eb5e28",
    punctuation: "#E5E5E5", // And operators
    usedProperties: "#7676ED",

    /* -----------------------------
    -       Secondary colors    -
    ----------------------------- */

    string: "#C1AF35",
    numeric: "#ffed66",
    boolean: "#00cecb",
  });
};
