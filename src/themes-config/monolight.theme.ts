import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#F4F2F2";
const secondaryBackground = Color(background).darken(0.04).hexa();
const selectedItemBackground = '#2cc2f04b';

export const getTheme = (): Theme => {
  return new Theme("Monolight", ThemeTypes.LIGHT, {
    ui: {
      activityBarcActiveIcon: "#00AFE4",
      activityBarIcons: "#939393",
      background: background,
      inlineHintBackground: secondaryBackground,
      lineActiveNumber: "#ae5dff",
      lineNumbersRulers: "#B5B5B5",
      lineSeparator: "#CECECE",
      listActiveItem: selectedItemBackground,
      menuBackground: secondaryBackground,
      menuHoverBackground: selectedItemBackground,
      quickInputBackground: secondaryBackground,
      quickInputListBackground: selectedItemBackground,
      scrollbarButtonBackground: "#CECECE",
      tabsBackground: "#ff006a17",
      tabsBorders: "#f1438c",
      windowResizeline: "#00AFE4",

    },
    editor: {
      boolean: "#0091A6",
      comment: "#7C7C7C",
      function: "#50b81f",
      keyword: "#f1438c",
      numeric: "#9C00A6",
      punctuation: "#e58800", // And operators
      string: "#8C7300",
      type: "#00AFE4",
      typePrimitive: "#0048E2",
      usedProperties: "#ae5dff",
      variable: "#2D2D2D",
    }







    /* -----------------------------
        -       Exclusive UI Colors    -
        ----------------------------- */




  });
};
