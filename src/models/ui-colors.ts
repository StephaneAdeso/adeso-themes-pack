import { Palette } from "./interfaces/palette.interface";

/**
 * this function returns the JSON Colors object. Used for configuring
 * the colors of the vscode user interface
 */
export function getColors(palette: Palette): any {
  return {
    "activityBar.activeBorder": palette.ui.activityBar.activeIconBorder,
    "activityBar.background": palette.ui.activityBar.background,
    "activityBar.foreground": palette.ui.activityBar.activeIcon,
    "activityBar.inactiveForeground": palette.ui.activityBar.inactiveIcons, // plugin icons on the left bar
    "activityBarBadge.background": palette.code.keyword,
    "activityBarBadge.foreground": palette.ui.menus.text,
    "button.background": palette.code.usedProperties,
    "checkbox.background": palette.ui.menus.inputBackground,
    "dropdown.background": palette.ui.menus.inputBackground,
    "editor.background": palette.ui.general.mainBackground,
    "editor.foreground": palette.code.variable,
    "editorGroupHeader.tabsBackground": palette.ui.general.mainBackground,
    "editorGutter.background": palette.ui.general.mainBackground,
    "editorIndentGuide.activeBackground": palette.code.type,
    "editorIndentGuide.background": palette.ui.editorPanel.lineSeparator,
    "editorInlayHint.background": palette.ui.editorPanel.inlineHintBackground,
    "editorInlayHint.foreground": palette.code.comment,
    "editorInlayHint.parameterForeground": palette.code.comment, //Inline Hints
    "editor.lineHighlightBorder": palette.ui.editorPanel.selectedLineBorder, // Lines around the last line you selected and focused on a window
    "editorLineNumber.activeForeground": palette.ui.editorPanel.lineActiveNumber,
    "editorLineNumber.foreground": palette.ui.editorPanel.lineNumbersRulers,
    "editorOverviewRuler.border": palette.ui.editorPanel.lineSeparator,
    "editorRuler.foreground": palette.ui.editorPanel.lineNumbersRulers,
    "foreground": palette.ui.menus.text,
    "input.background": palette.ui.menus.inputBackground,
    "list.activeSelectionBackground": palette.ui.sideBar.itemsSelectedBackground, // background color of the focused and selected item in the tree view
    "list.activeSelectionForeground": palette.ui.sideBar.itemsActiveSelectedForeground, // text color of the focused and selected item in the tree view

    "list.focusOutline": palette.ui.sideBar.itemsborderLine, // border line of selected item without focus. Only keyboard.
    "list.focusAndSelectionOutline": palette.ui.sideBar.itemsborderLine, // border line of selected item + focus
    "list.focusBackground": palette.ui.sideBar.itemsFocusBackground, // background of focused tree items only with keyboard.
    "list.hoverBackground": palette.ui.sideBar.itemsHoverBackground, // background of hovered tree items without selecting anyone.
    "list.inactiveSelectionBackground": palette.ui.sideBar.itemsSelectedBackground,   // background of previously selected tree item and focus is outside item window.
    "menu.background": palette.ui.menus.background,
    "menu.foreground": palette.ui.menus.text,
    "menu.selectionBackground": palette.ui.menus.hoverBackground,
    "panel.border": palette.ui.editorPanel.lineSeparator,
    "quickInput.background": palette.ui.menus.background,// background of window like command palette 
    "quickInput.foreground": palette.ui.menus.text,
    "quickInputList.focusBackground": palette.ui.menus.quickInputListBackground, // background of selected item in the list like command palette.ui.
    "scrollbar.shadow": palette.ui.general.mainBackground,
    "scrollbarSlider.background": palette.ui.general.scrollbarButtonBackground, // color of the scrollbar button
    "sideBar.background": palette.ui.sideBar.background,
    "sideBar.border": palette.ui.editorPanel.lineSeparator,
    "sideBar.foreground": palette.ui.sideBar.itemsForeground,
    "sideBarSectionHeader.foreground": palette.ui.sideBar.sectionHeaderForeground,
    "sideBarSectionHeader.background": palette.ui.sideBar.sectionHeaderBackground,
    "sideBarSectionHeader.border": palette.ui.sideBar.sectionHeaderBorder,
    "sideBarTitle.foreground": palette.ui.sideBar.titleForeground,
    "statusBar.background": palette.code.usedProperties, // the long bar at the bottom of the main window
    "tab.activeBackground": palette.ui.tabs.background,
    "tab.activeBorder": palette.ui.tabs.borders,
    "tab.activeBorderTop": palette.ui.tabs.borders,
    "tab.inactiveBackground": palette.ui.general.mainBackground,
    "titleBar.activeBackground": palette.ui.titleBar.background,
    "titleBar.activeForeground": palette.ui.titleBar.foreground,
    "titleBar.inactiveBackground": palette.ui.titleBar.inactiveBackground,
    "titleBar.inactiveForeground": palette.ui.titleBar.inactiveForeground,
    "tree.indentGuidesStroke": palette.ui.activityBar.activeIcon,
    focusBorder: palette.ui.activityBar.activeIcon, // the color of the line near the scroll bar when you try to resize a window
  };
}
