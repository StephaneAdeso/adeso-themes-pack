import { Palette } from "./interfaces/palette-int";
import { getCssColors } from "./editor_colors_fragments/css-colors";
import { getDartColors } from "./editor_colors_fragments/dart-colors";
import { getGenericColors } from "./editor_colors_fragments/generic-colors";
import { getGoColors } from "./editor_colors_fragments/go-colors";
import { getHtmlColors } from "./editor_colors_fragments/html-colors";
import { getJavaColors } from "./editor_colors_fragments/java-colors";
import { getJsonColors } from "./editor_colors_fragments/json-colors";
import { geMarkdownColors } from "./editor_colors_fragments/markdown-colors";
import { getPhpColors } from "./editor_colors_fragments/php-colors";
import { getPythonColors } from "./editor_colors_fragments/python-colors";
import { getSassColors } from "./editor_colors_fragments/sass-colors";
import { getYamlColors } from "./editor_colors_fragments/yaml-colors";
import { getSwiftColors } from "./editor_colors_fragments/swift-colors";
import { getTypescriptColors } from "./editor_colors_fragments/typescript-colors";

/** this function returns the JSON TokenColors array. Used for configuring the colors of the editor */
export function getTokenColors(palette: Palette): any[] {
  return [
    ...getGenericColors(palette),
    ...getCssColors(palette),
    ...getDartColors(palette),
    ...getGoColors(palette),
    ...getHtmlColors(palette),
    ...getJavaColors(palette),
    ...getJsonColors(palette),
    ...geMarkdownColors(palette),
    ...getPhpColors(palette),
    ...getPythonColors(palette),
    ...getSassColors(palette),
    ...getYamlColors(palette),
    ...getSwiftColors(palette),
    ...getTypescriptColors(palette),
  ];
}
