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
    "editorInlayHint.background": palette.inlineHintBackground,
    "editorInlayHint.foreground": palette.comment,
    "editorInlayHint.parameterForeground": palette.comment, //Inline Hints
    "editorLineNumber.activeForeground": palette.lineActiveNumber,
    "editorLineNumber.foreground": palette.lineNumbersRulers,
    "editorOverviewRuler.border": palette.lineSeparator,
    "editorRuler.foreground": palette.lineNumbersRulers,
    "list.activeSelectionBackground": palette.tabsBackground,
    "list.activeSelectionForeground": palette.variable,
    "menu.background": palette.menuBackground,
    "menu.selectionBackground": palette.menuHoverBackground,
    "quickInput.background":palette.quickInputBackground, // background of window like command palette
    "scrollbar.shadow": palette.background,
    "scrollbarSlider.background":palette.scrollbarButtonBackground, // color of the scrollbar button
    "sideBar.background": palette.background,
    "sideBar.border": palette.lineSeparator,
    "sideBarSectionHeader.background": palette.background,
    "sideBarSectionHeader.border": palette.lineSeparator,
    "sideBarTitle.foreground": palette.variable,
    "statusBar.background": palette.usedProperties, // the long bar at the bottom of the main window
    "tab.activeBackground": palette.tabsBackground,
    "tab.activeBorder": palette.tabsBorders,
    "tab.activeBorderTop": palette.tabsBorders,
    "tab.inactiveBackground": palette.background,
    "titleBar.activeBackground": palette.background,
    "tree.indentGuidesStroke": palette.type,    
    focusBorder: palette.windowResizeline, // the color of the line near the scroll bar when you try to resize a window
  };
}
