import Color from "color";
import { ThemeTypes } from "../models/enums/themeTypes.enum";
import { Theme } from "../models/theme";

const background = "#1f1f1f";
const secondaryBackground = Color(background).lighten(0.2).hexa();
const selectedItemBackground = "#2cc2f04b";

export const getTheme = (): Theme => {
  return new Theme("Monodark", ThemeTypes.DARK, {
    ui: {
      activityBar: {
        ActiveIcon: "#22c0f0",
        inactiveIcons: "#dbdbdb7c",
      },
      menus: {
        background: secondaryBackground,
        hoverBackground: selectedItemBackground,
        quickInputBackground: secondaryBackground,
        quickInputListBackground: selectedItemBackground,
      },
      trees: {
        activeItem: selectedItemBackground,
      },
      editorWindow: {

        inlineHintBackground: secondaryBackground,
        lineActiveNumber: "#ae5dff",
        lineNumbersRulers: "#444444",
        lineSeparator: "#343434"
      },
      general: {
        mainBackground: background,
        windowResizeline: "#22c0f0",
        scrollbarButtonBackground: "#343434",
      },
      tabs: {
        background: "#ff006a17",
        borders: "#f1438c"
      }
    },
    code: {
      boolean: "#c09ad9",
      comment: "#6e6e6e",
      func: "#56cc1f",
      keyword: "#f1438c",
      numeric: "#a9dff0",
      punctuation: "#f69608", // And operators
      string: "#e6d08e",
      type: "#22c0f0",
      typePrimitive: "#437fff",
      usedProperties: "#ae5dff",
      variable: "#d3d3d3",
    }
  });
};
