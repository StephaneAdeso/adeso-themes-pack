import * as c_colors from "./token_colors_variants/c-colors";
import * as java_colors from "./token_colors_variants/java-colors";
import * as javascript_colors from "./token_colors_variants/javascript-colors";
import * as python_colors from "./token_colors_variants/python-colors";
import * as json_colors from "./token_colors_variants/json-colors";
import * as markdown_colors from "./token_colors_variants/markdown-colors";
import * as typescript_colors from "./token_colors_variants/typescript-colors";
import * as html_colors from "./token_colors_variants/html-colors";
import * as generic_colors from "./token_colors_variants/generic-colors";
import * as css_colors from "./token_colors_variants/css-colors";
import * as dart_colors from "./token_colors_variants/dart-colors";
import * as php_colors from "./token_colors_variants/php-colors";
import * as yaml_colors from "./token_colors_variants/yaml-colors";
import * as swift_colors from "./token_colors_variants/swift-colors";
import * as rust_colors from "./token_colors_variants/rust-colors";
import * as ruby_colors from "./token_colors_variants/ruby-colors";
import * as go_colors from "./token_colors_variants/go-colors";
import * as csharp_colors from "./token_colors_variants/csharp-colors";
import * as cpp_colors from "./token_colors_variants/cpp-colors";
import * as sass_colors from "./token_colors_variants/sass-colors";

const tokenColors = [
  ...generic_colors.default,
  ...c_colors.default,
  ...cpp_colors.default,
  ...csharp_colors.default,
  ...css_colors.default,
  ...dart_colors.default,
  ...go_colors.default,
  ...html_colors.default,
  ...java_colors.default,
  ...javascript_colors.default,
  ...json_colors.default,
  ...markdown_colors.default,
  ...php_colors.default,
  ...python_colors.default,
  ...ruby_colors.default,
  ...rust_colors.default,
  ...sass_colors.default,
  ...swift_colors.default,
  ...typescript_colors.default,
  ...yaml_colors.default,
];

export default {
  tokenColors,
};
