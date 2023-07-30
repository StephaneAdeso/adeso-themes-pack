import { Palette } from "./interfaces/palette.interface";

/**
 * this function returns the JSON Colors object. Used for configuring
 * the colors of the vscode user interface
 */
export function getColors(palette: Palette): any {
  return {
    "activityBar.activeBorder": palette.type,
    "activityBar.background": palette.background,
    "activityBar.foreground": palette.activityBarcActiveIcon,
    "activityBar.inactiveForeground": palette.activityBarIcons, // plugin icons on the left bar
    "activityBarBadge.background": palette.keyword,
    "activityBarBadge.foreground": palette.variable,
    "button.background": palette.usedProperties,
    "editor.background": palette.background,
    "editor.foreground": palette.variable,
    "editorGroupHeader.tabsBackground": palette.background,
    "editorGutter.background": palette.background,
    "editorIndentGuide.activeBackground": palette.type,
    "editorIndentGuide.background": palette.lineSeparator,
    "editorInlayHint.parameterForeground": palette.comment, //Inline Hints
    "editorInlayHint.foreground": palette.comment,
    "editorInlayHint.background": palette.inlineHintBackground,
    "editorLineNumber.activeForeground": palette.lineActiveNumber,
    "editorLineNumber.foreground": palette.lineNumbersRulers,
    "editorOverviewRuler.border": palette.lineSeparator,
    "editorRuler.foreground": palette.lineNumbersRulers,
    "list.activeSelectionBackground": palette.tabsBackground,
    "list.activeSelectionForeground": palette.variable,
    "menu.selectionBackground": palette.menuBackground,
    "scrollbar.shadow": palette.background,
    "sideBar.background": palette.background,
    "sideBar.border": palette.lineSeparator,
    "sideBarSectionHeader.background": palette.background,
    "sideBarSectionHeader.border": palette.lineSeparator,
    "sideBarTitle.foreground": palette.variable,
    "statusBar.background": palette.usedProperties,
    "tab.activeBackground": palette.tabsBackground,
    "tab.activeBorder": palette.tabsBorders,
    "tab.activeBorderTop": palette.tabsBorders,
    "tab.inactiveBackground": palette.background,
    "titleBar.activeBackground": palette.background,
    "tree.indentGuidesStroke": palette.type,
    focusBorder: palette.type,
  };
}
