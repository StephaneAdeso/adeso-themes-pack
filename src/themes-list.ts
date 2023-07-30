import { ThemeTypes } from "./models/enums/themeTypes.enum";
import { Theme } from "./models/theme";
import Color = require("color");

/**
 * This is the list where you create youre themes
 */
export const themesList: Theme[] = [
  new Theme("Monodark", ThemeTypes.DARK, {
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
  }),
  new Theme("Monolight", ThemeTypes.LIGHT, {
    /* -----------------------------
    -       Exclusive UI Colors    -
    ----------------------------- */
    background: "#F4F2F2",
    inlineHintBackground: Color("#F4F2F2").darken(0.04).hexa(),
    lineSeparator: "#CECECE",
    activityBarIcons: "#939393",
    activityBarcActiveIcon: "#00AFE4",
    lineNumbersRulers: "#B5B5B5",
    lineActiveNumber: "#ae5dff",
    listActiveItem: "#2cc2f04b",
    menuBackground: "#22c0f017",
    tabsBackground: "#ff006a17",
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
  }),
  new Theme("Universaldark", ThemeTypes.DARK, {
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
  }),
  new Theme("Goldendark", ThemeTypes.DARK, {
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
  }),
  new Theme("EyeSafedark", ThemeTypes.DARK, {
    /* -----------------------------
    -       Exclusive UI Colors    -
    ----------------------------- */
    background: "#131111",
    inlineHintBackground: Color("#131111").lighten(0.2).hexa(),
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
  }),
];
