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
    "activityBar.border": palette.ui.activityBar.border,
    "activityBarBadge.background": palette.ui.activityBar.bottomBadgeBackground,
    "activityBarBadge.foreground": palette.ui.activityBar.bottomBadgeForeground,
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
    "foreground": palette.ui.general.globalForeground,
    "input.background": palette.ui.menus.inputBackground,
    "list.activeSelectionBackground": palette.ui.lists.listActiveSelectionBackground, // background color of the focused and selected item in the tree view
    "list.activeSelectionForeground": palette.ui.lists.listActiveSelectionForeground, // text color of the focused and selected item in the tree view

    "list.focusOutline": palette.ui.lists.listFocusOutline, // border line of selected item without focus. Only keyboard.
    "list.focusAndSelectionOutline": palette.ui.lists.listFocusOutline, // border line of selected item + focus
    "list.focusBackground": palette.ui.lists.listFocusKeyboardBackground, // background of focused tree items only with keyboard.
    "list.hoverBackground": palette.ui.lists.listItemHoverBackground, // background of hovered tree items without selecting anyone.
    "list.inactiveSelectionBackground": palette.ui.lists.listActiveSelectionBackground,   // background of previously selected tree item and focus is outside item window.
    "menu.background": palette.ui.menus.background,
    "menu.foreground": palette.ui.menus.foreground,
    "menu.selectionBackground": palette.ui.menus.hoverBackground,
    "panel.border": palette.ui.editorPanel.lineSeparator,
    "quickInput.background": palette.ui.lists.quickInputBackground,// background of window like command palette 
    "quickInput.foreground": palette.ui.lists.quickInputForeground,
    "quickInputList.focusBackground": palette.ui.lists.QuickInputFocusBackground, // background of selected item in the list like command palette.ui.
    "scrollbar.shadow": palette.ui.general.mainBackground,
    "scrollbarSlider.background": palette.ui.general.scrollbarButtonBackground, // color of the scrollbar button
    "sideBar.background": palette.ui.sideBar.background,
    "sideBar.border": palette.ui.sideBar.border,
    "sideBar.foreground": palette.ui.sideBar.itemsForeground,
    "sideBarSectionHeader.foreground": palette.ui.sideBar.sectionHeaderForeground,
    "sideBarSectionHeader.background": palette.ui.sideBar.sectionHeaderBackground,
    "sideBarSectionHeader.border": palette.ui.sideBar.sectionHeaderLineBorder,
    "sideBarTitle.foreground": palette.ui.sideBar.titleForeground,
    "statusBar.background": palette.ui.statusBar.background, // the long bar at the bottom of the main window
    "statusBar.border": palette.ui.statusBar.border,
    "statusBar.foreground": palette.ui.statusBar.itemsForeground,
    "statusBarItem.hoverBackground": palette.ui.statusBar.itemsHoverBackground,
    "tab.activeBackground": palette.ui.tabs.activeBackground,
    "tab.border": palette.ui.tabs.activeLeftAndRightBorder,
    "tab.activeBorder": palette.ui.tabs.activeBorderBottom,
    "tab.activeBorderTop": palette.ui.tabs.activeBorderTop,
    "tab.activeForeground": palette.ui.tabs.activeForeground,
    "tab.inactiveBackground": palette.ui.tabs.inactiveBackground,
    "tab.inactiveForeground": palette.ui.tabs.inactiveForeground,
    "tab.unfocusedActiveForeground": palette.ui.tabs.unfocusedActiveForeground,
    "tab.unfocusedInactiveForeground": palette.ui.tabs.unfocusedInactiveForeground,
    "titleBar.activeBackground": palette.ui.titleBar.background,
    "titleBar.activeForeground": palette.ui.titleBar.foreground,
    "titleBar.border": palette.ui.titleBar.border,
    "titleBar.inactiveBackground": palette.ui.titleBar.inactiveBackground,
    "titleBar.inactiveForeground": palette.ui.titleBar.inactiveForeground,
    "tree.indentGuidesStroke": palette.ui.lists.treesIndentGuideStroke,
    focusBorder: palette.ui.activityBar.activeIcon, // the color of the line near the scroll bar when you try to resize a window
  };
}
