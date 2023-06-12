import * as generic_colors from "./token_colors_variants/generic-colors";
import * as markdown_colors from "./token_colors_variants/markdown_colors";
import * as html_colors from "./token_colors_variants/html-colors";
import * as java_colors from "./token_colors_variants/java-colors";
import * as json_colors from "./token_colors_variants/json-colors";
import * as python_colors from "./token_colors_variants/python-colors";
import * as css_colors from "./token_colors_variants/css-colors";
import * as sass_colors from "./token_colors_variants/sass-colors";
import * as yaml_colors from "./token_colors_variants/yaml-colors";
import * as swift_colors from "./token_colors_variants/swift-colors";
import * as php_colors from "./token_colors_variants/php-colors";
import * as dart_colors from "./token_colors_variants/dart-colors";
import * as go_colors from "./token_colors_variants/go-colors";

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
