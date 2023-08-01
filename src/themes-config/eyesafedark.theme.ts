import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#131111";
const secondaryBackground = Color(background).lighten(0.2).hexa()
const selectedItemBackground = "#FCA3114b";

export const getTheme = (): Theme => {
  return new Theme("EyeSafedark", ThemeTypes.DARK, {
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
      scrollbarButtonBackground: "#CECECE",
      tabsBackground: "#BEE7FB17",
      tabsBorders: "#FCA311",
      windowResizeline: "#FCA311",
    },
    editor: {
      boolean: "#00cecb",
      comment: "#777664",
      function: "#007f5f",
      keyword: "#96624a",
      numeric: "#ffed66",
      punctuation: "#ca6702", // And operators 
      string: "#C1AF35",
      type: "#168aad",
      typePrimitive: "#63a8a6",
      usedProperties: "#7676ED",
      variable: "#c7c7c7",
    }






  });
};
