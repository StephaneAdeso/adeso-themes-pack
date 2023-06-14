import { ThemeTypes } from "./models/enums/themeTypes.enum";
import { Theme } from "./models/theme";

/**
 * This is the list where you create youre themes
 */
export const themesList: Theme[] = [
  new Theme("Monodark", ThemeTypes.DARK, {
    /* -----------------------------
    -       Exclusive UI Colors    -
    ----------------------------- */
    Background: "#252525",
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
    Punctuation: "#f69608",
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
    Background: "#252525",
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
    Punctuation: "#f69608",
    Used_properties: "#ae5dff",

    /* -----------------------------
    -       Secondary colors    -
    ----------------------------- */

    String: "#e6d08e",
    Numeric: "#a9dff0",
    Boolean: "#c09ad9",
  }),
];
