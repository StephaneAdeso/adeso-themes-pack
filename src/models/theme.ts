import { getTokenColors } from "./editor-colors";
import { ThemeTypes } from "./enums/themeTypes.enum";
import { Palette } from "./interfaces/palette-int";
import { getColors } from "./ui-colors";

export class Theme {
  constructor(
    private name: string,
    private type: ThemeTypes,
    private palette: Palette
  ) {}

  get nameValue() {
    return this.name;
  }

  getJsonTheme() {
    return {
      name: this.name,
      type: this.type,
      colors: getTokenColors(this.palette),
      tokenColors: getColors(this.palette),
    };
  }
}
