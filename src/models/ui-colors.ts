import { Palette } from "./interfaces/palette-int";

/** this function returns the JSON Colors object. Used for configuring the colors of the
 * vscode user interface
 */
export function getColors(palette: Palette): any {
  return {
    "activityBar.activeBorder": palette.Type,
    "activityBar.background": palette.Background,
    "activityBar.foreground": palette.Type,
    "activityBar.inactiveForeground": palette.Activity_bar_icon, // plugin icons on the left bar
    "activityBarBadge.background": palette.Keyword,
    "activityBarBadge.foreground": palette.Variable,
    "button.background": palette.Used_properties,
    "editor.background": palette.Background,
    "editor.foreground": palette.Variable,
    "editorGroupHeader.tabsBackground": palette.Background,
    "editorGutter.background": palette.Background,
    "editorIndentGuide.activeBackground": palette.Type,
    "editorIndentGuide.background": palette.Line_separator,
    "editorInlayHint.parameterForeground": palette.Comment,
    "editorLineNumber.activeForeground": palette.Used_properties,
    "editorLineNumber.foreground": palette.Line_numbers_rulers,
    "editorOverviewRuler.border": palette.Line_separator,
    "editorRuler.foreground": palette.Line_numbers_rulers,
    "list.activeSelectionBackground": palette.Active_list_item,
    "menu.selectionBackground": palette.Type,
    "scrollbar.shadow": palette.Background,
    "sideBar.background": palette.Background,
    "sideBar.border": palette.Line_separator,
    "sideBarSectionHeader.background": palette.Background,
    "sideBarSectionHeader.border": palette.Line_separator,
    "sideBarTitle.foreground": palette.Variable,
    "statusBar.background": palette.Used_properties,
    "tab.activeBackground": palette.Tabs_background,
    "tab.activeBorder": palette.Keyword,
    "tab.activeBorderTop": palette.Keyword,
    "tab.inactiveBackground": palette.Background,
    "titleBar.activeBackground": palette.Background,
    "tree.indentGuidesStroke": palette.Type,
    focusBorder: palette.Type,
  };
}
