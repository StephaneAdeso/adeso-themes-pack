import * as generic_colors from "./token_colors_variants/generic-colors";
import * as markdown_colors from "../../models/editor_colors_fragments/markdown-colors";
import * as html_colors from "../../models/editor_colors_fragments/html-colors";
import * as java_colors from "../../models/editor_colors_fragments/java-colors";
import * as json_colors from "../../models/editor_colors_fragments/json-colors";
import * as python_colors from "../../models/editor_colors_fragments/python-colors";
import * as css_colors from "../../models/editor_colors_fragments/css-colors";
import * as sass_colors from "../../models/editor_colors_fragments/sass-colors";
import * as yaml_colors from "../../models/editor_colors_fragments/yaml-colors";
import * as swift_colors from "./token_colors_variants/swift-colors";
import * as php_colors from "../../models/editor_colors_fragments/php-colors";
import * as dart_colors from "../../models/editor_colors_fragments/dart-colors";
import * as go_colors from "../../models/editor_colors_fragments/go-colors";

const tokenColors = [
  ...generic_colors.default,
  ...markdown_colors.default,
  ...html_colors.default,
  ...java_colors.default,
  ...json_colors.default,
  ...python_colors.default,
  ...css_colors.default,
  ...sass_colors.default,
  ...yaml_colors.default,
  ...swift_colors.default,
  ...php_colors.default,
  ...dart_colors.default,
  ...go_colors.default,
];

export default {
  tokenColors,
};
