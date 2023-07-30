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
    Background: "#252525",
    InlineHint_Background: Color("#252525").lighten(0.2).hexa(),
    Line_separator: "#343434",
    Activity_bar_icon: "#dbdbdb7c",
    Line_numbers_rulers: "#444444",
    Active_list_item: "#2cc2f04b",
    Tabs_background: "#ff006a17",

    /* -----------------------------
    -       Primary colors    -
    ----------------------------- */

    Variable: "#d3d3d3",
    Comment: "#6e6e6e",
    Type: "#22c0f0",
    Type_Primitive: "#437fff",
    Function: "#56cc1f",
    Keyword: "#f1438c",
    Punctuation: "#f69608", // And operators
    Used_properties: "#ae5dff",

    /* -----------------------------
    -       Secondary colors    -
    ----------------------------- */

    String: "#e6d08e",
    Numeric: "#a9dff0",
    Boolean: "#c09ad9",
  }),
  new Theme("Monolight", ThemeTypes.LIGHT, {
    /* -----------------------------
    -       Exclusive UI Colors    -
    ----------------------------- */
    Background: "#F4F2F2",
    InlineHint_Background: Color("#F4F2F2").darken(0.04).hexa(),
    Line_separator: "#CECECE",
    Activity_bar_icon: "#939393",
    Line_numbers_rulers: "#B5B5B5",
    Active_list_item: "#2cc2f04b",
    Tabs_background: "#ff006a17",

    /* -----------------------------
    -       Primary colors    -
    ----------------------------- */

    Variable: "#2D2D2D",
    Comment: "#7C7C7C",
    Type: "#00AFE4",
    Type_Primitive: "#0048E2",
    Function: "#50b81f",
    Keyword: "#f1438c",
    Punctuation: "#e58800", // And operators
    Used_properties: "#ae5dff",

    /* -----------------------------
    -       Secondary colors    -
    ----------------------------- */

    String: "#8C7300",
    Numeric: "#9C00A6",
    Boolean: "#0091A6",
  }),
  new Theme("Universaldark", ThemeTypes.DARK, {
    /* -----------------------------
    -       Exclusive UI Colors    -
    ----------------------------- */
    Background: "#2c2c2c",
    InlineHint_Background: Color("#2c2c2c").lighten(0.2).hexa(),
    Line_separator: "#414141",
    Activity_bar_icon: "#dbdbdb7c",
    Line_numbers_rulers: "#444444",
    Active_list_item: "#2cc2f04b",
    Tabs_background: "#ff006a17",

    /* -----------------------------
    -       Primary colors    -
    ----------------------------- */

    Variable: "#ebebeb",
    Comment: "#6e6e6e",
    Type: "#BEE7FB",
    Type_Primitive: "#C1AF35",
    Function: "#BEC5FB",
    Keyword: "#FBBED4",
    Punctuation: "#FBE7BE", // And operators
    Used_properties: "#7676ED",

    /* -----------------------------
    -       Secondary colors    -
    ----------------------------- */

    String: "#BEE7FB",
    Numeric: "#F18686",
    Boolean: "#4CDA87",
  }),
];
