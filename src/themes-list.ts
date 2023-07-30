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
    activityBarIcon: "#dbdbdb7c",
    lineNumbersRulers: "#444444",
    lineActiveNumber: "#ae5dff",
    listActiveItem: "#2cc2f04b",
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
    activityBarIcon: "#939393",
    lineNumbersRulers: "#B5B5B5",
    lineActiveNumber: "#ae5dff",
    listActiveItem: "#2cc2f04b",
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
    background: "#313131",
    inlineHintBackground: Color("#313131").lighten(0.2).hexa(),
    lineSeparator: "#525252",
    activityBarIcon: "#dbdbdb7c",
    lineActiveNumber: "#BEE7FB",
    lineNumbersRulers: "#525252",
    listActiveItem: "#2cc2f04b",
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
    background: "#313131",
    inlineHintBackground: Color("#313131").lighten(0.2).hexa(),
    lineSeparator: "#525252",
    activityBarIcon: "#dbdbdb7c",
    lineActiveNumber: "#BEE7FB",
    lineNumbersRulers: "#525252",
    listActiveItem: "#2cc2f04b",
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
];
