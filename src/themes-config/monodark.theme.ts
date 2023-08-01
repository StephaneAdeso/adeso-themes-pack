import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#1f1f1f";
const background2 = Color(background).lighten(0.2).hexa();
const color1 = "#22c0f0";
const color1Alpha = Color(color1).alpha(0.3).hexa();
const color2 = "#f1438c";
const color2Alpha = Color(color2).alpha(0.1).hexa();
const transparent = "#00000000";

export const getTheme = (): Theme => {
  return new Theme("Monodark", ThemeTypes.DARK, {
    ui: {
      activityBar: {
        activeIcon: color1,
        inactiveIcons: "#dbdbdb7c",
      },
      menus: {
        background: background2,
        hoverBackground: color1Alpha,
        quickInputBackground: background2,
        quickInputListBackground: color1Alpha,
      },
      trees: {
        activeItem: color1Alpha,
        focusItemBackground: transparent,
        hoverItemBackground: color1Alpha,
        inactiveSelectionBackground: color1Alpha,
      },
      editorWindow: {
        inlineHintBackground: background2,
        lineActiveNumber: "#ae5dff",
        lineNumbersRulers: "#444444",
        lineSeparator: "#343434"
      },
      general: {
        mainBackground: background,
        windowResizeline: color1,
        scrollbarButtonBackground: "#343434",
      },
      tabs: {
        background: color2Alpha,
        borders: color2
      }
    },
    code: {
      boolean: "#c09ad9",
      comment: "#6e6e6e",
      func: "#56cc1f",
      keyword: color2,
      numeric: "#a9dff0",
      punctuation: "#f69608", // And operators
      string: "#e6d08e",
      type: color1,
      typePrimitive: "#437fff",
      usedProperties: "#ae5dff",
      variable: "#d3d3d3",
    }
  });
};
