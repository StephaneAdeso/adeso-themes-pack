import { Palette } from "./interfaces/palette.interface";

/**
 * this function returns the JSON Colors object. Used for configuring
 * the colors of the vscode user interface
 */
export function getColors(palette: Palette): any {
  return {
    "activityBar.activeBorder": palette.editor.type,
    "activityBar.background": palette.ui.background,
    "activityBar.foreground": palette.ui.activityBarcActiveIcon,
    "activityBar.inactiveForeground": palette.ui.activityBarIcons, // plugin icons on the left bar
    "activityBarBadge.background": palette.editor.keyword,
    "activityBarBadge.foreground": palette.editor.variable,
    "button.background": palette.editor.usedProperties,
    "editor.background": palette.ui.background,
    "editor.foreground": palette.editor.variable,
    "editorGroupHeader.tabsBackground": palette.ui.background,
    "editorGutter.background": palette.ui.background,
    "editorIndentGuide.activeBackground": palette.editor.type,
    "editorIndentGuide.background": palette.ui.lineSeparator,
    "editorInlayHint.background": palette.ui.inlineHintBackground,
    "editorInlayHint.foreground": palette.editor.comment,
    "editorInlayHint.parameterForeground": palette.editor.comment, //Inline Hints
    "editorLineNumber.activeForeground": palette.ui.lineActiveNumber,
    "editorLineNumber.foreground": palette.ui.lineNumbersRulers,
    "editorOverviewRuler.border": palette.ui.lineSeparator,
    "editorRuler.foreground": palette.ui.lineNumbersRulers,
    "list.activeSelectionBackground": palette.ui.tabsBackground,
    "list.activeSelectionForeground": palette.editor.variable,
    "menu.background": palette.ui.menuBackground,
    "menu.selectionBackground": palette.ui.menuHoverBackground,
    "quickInput.background": palette.ui.quickInputBackground,// background of window like command palette 
    "quickInputList.focusBackground": palette.ui.quickInputListBackground, // background of selected item in the list like command palette.ui.
    "scrollbar.shadow": palette.ui.background,
    "scrollbarSlider.background": palette.ui.scrollbarButtonBackground, // color of the scrollbar button
    "sideBar.background": palette.ui.background,
    "sideBar.border": palette.ui.lineSeparator,
    "sideBarSectionHeader.background": palette.ui.background,
    "sideBarSectionHeader.border": palette.ui.lineSeparator,
    "sideBarTitle.foreground": palette.editor.variable,
    "statusBar.background": palette.editor.usedProperties, // the long bar at the bottom of the main window
    "tab.activeBackground": palette.ui.tabsBackground,
    "tab.activeBorder": palette.ui.tabsBorders,
    "tab.activeBorderTop": palette.ui.tabsBorders,
    "tab.inactiveBackground": palette.ui.background,
    "titleBar.activeBackground": palette.ui.background,
    "tree.indentGuidesStroke": palette.editor.type,
    focusBorder: palette.ui.windowResizeline, // the color of the line near the scroll bar when you try to resize a window
  };
}
