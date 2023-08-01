import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#1a1e27";
const secondaryBackground = Color(background).lighten(0.2).hexa()
const selectedItemBackground = "#FCA3114b";

export const getTheme = (): Theme => {
  return new Theme("BananaInTheDark", ThemeTypes.DARK, {
    ui: {
      activityBarcActiveIcon: "#FCA311",
      activityBarIcons: "#ffbb4e7c",
      background: background,
      inlineHintBackground: secondaryBackground,
      lineActiveNumber: "#FCA311",
      lineNumbersRulers: "#525252",
      lineSeparator: "#525252",
      listActiveItem: selectedItemBackground,
      menuBackground: secondaryBackground,
      menuHoverBackground: selectedItemBackground,
      quickInputBackground: secondaryBackground,
      quickInputListBackground: selectedItemBackground,
      scrollbarButtonBackground: "#525252",
      tabsBackground: "#BEE7FB17",
      tabsBorders: "#FCA311",
      windowResizeline: "#FCA311",
    },
    editor: {
      boolean: "#00cecb",
      comment: "#83814e",
      function: "#94d1be",
      keyword: "#eb5e28",
      numeric: "#ffed66",
      punctuation: "#E5E5E5", // And operators
      string: "#C1AF35",
      type: "#b8dbd9",
      typePrimitive: "#63a8a6",
      usedProperties: "#7676ED",
      variable: "#FCA311",
    }
  });
};
