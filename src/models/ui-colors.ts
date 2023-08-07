import { Palette } from "./interfaces/palette.interface";

/**
 * this function returns the JSON Colors object. Used for configuring
 * the colors of the vscode user interface
 */
export function getColors(p: Palette): any {
  return {

    "activityBar.activeBorder": p.ui.activityBar.activeIconBorder,
    "activityBar.background": p.ui.activityBar.background,
    "activityBar.border": p.ui.activityBar.border,
    "activityBar.foreground": p.ui.activityBar.activeIcon,
    "activityBar.inactiveForeground": p.ui.activityBar.inactiveIcons, // plugin icons on the left bar
    "activityBarBadge.background": p.ui.activityBar.bottomBadgeBackground,
    "activityBarBadge.foreground": p.ui.activityBar.bottomBadgeForeground,
    "breadcrumb.background": p.ui.breadcrumbs.background,
    "breadcrumb.foreground": p.ui.breadcrumbs.foreground,
    "button.background": p.ui.menus.buttonBackground,
    "checkbox.background": p.ui.menus.inputBackground,
    "dropdown.background": p.ui.menus.inputBackground,
    "editor.background": p.ui.editor.background,
    "editor.foreground": p.ui.editor.foreground,
    "editor.lineHighlightBorder": p.ui.editor.selectedLineBorder, // Lines around the last line you selected and focused on a window
    "editorGroup.border": p.ui.editor.groupBorder,
    "editorGroupHeader.tabsBackground": p.ui.editor.groupHeaderTabsBackground,
    "editorGutter.background": p.ui.editor.lineNumbersColumnBackground,
    "editorIndentGuide.activeBackground1": p.ui.editor.activeIndentGuideColor,
    "editorIndentGuide.background1": p.ui.editor.indentGuideColor,
    "editorInlayHint.background": p.ui.editor.inlayHintBackground,
    "editorInlayHint.foreground": p.ui.editor.inlayHintForeground,
    "editorInlayHint.parameterForeground": p.ui.editor.inlayHintForeground, //Inline Hints
    "editorLineNumber.activeForeground": p.ui.editor.lineActiveNumber,
    "editorLineNumber.foreground": p.ui.editor.lineRulersNumbers,
    "editorOverviewRuler.border": p.ui.editor.scrollbarLineSeparator,
    "editorRuler.foreground": p.ui.editor.lineRulersNumbers,
    "foreground": p.ui.global.globalForeground,
    "input.background": p.ui.menus.inputBackground,
    "list.activeSelectionBackground": p.ui.lists.listActiveSelectionBackground, // background color of the focused and selected item in the tree view
    "list.activeSelectionForeground": p.ui.lists.listActiveSelectionForeground, // text color of the focused and selected item in the tree view
    "list.focusAndSelectionOutline": p.ui.lists.listFocusOutline, // border line of selected item + focus
    "list.focusBackground": p.ui.lists.listFocusKeyboardBackground, // background of focused tree items only with keyboard.
    "list.focusOutline": p.ui.lists.listFocusOutline, // border line of selected item without focus. Only keyboard.
    "list.hoverBackground": p.ui.lists.listItemHoverBackground, // background of hovered tree items without selecting anyone.
    "list.inactiveSelectionBackground": p.ui.lists.listActiveSelectionBackground,   // background of previously selected tree item and focus is outside item window.
    "menu.background": p.ui.menus.background,
    "menu.foreground": p.ui.menus.foreground,
    "menu.selectionBackground": p.ui.menus.hoverBackground,
    "minimap.background": p.ui.minimap.background,
    "panel.background": p.ui.panel.background,
    "panel.border": p.ui.panel.border,
    "quickInput.background": p.ui.lists.quickInputBackground,// background of window like command palette 
    "quickInput.foreground": p.ui.lists.quickInputForeground,
    "quickInputList.focusBackground": p.ui.lists.quickInputFocusBackground, // background of selected item in the list like command palette.ui.  
    "scrollbar.shadow": p.ui.global.scrollbarShadow,
    "scrollbarSlider.background": p.ui.global.scrollbarButtonColor, // color of the scrollbar button
    "sideBar.background": p.ui.sideBar.background,
    "sideBar.border": p.ui.sideBar.border,
    "sideBar.foreground": p.ui.sideBar.itemsForeground,
    "sideBarSectionHeader.background": p.ui.sideBar.sectionHeaderBackground,
    "sideBarSectionHeader.border": p.ui.sideBar.sectionHeaderLineBorder,
    "sideBarSectionHeader.foreground": p.ui.sideBar.sectionHeaderForeground,
    "sideBarTitle.foreground": p.ui.sideBar.titleForeground,
    "statusBar.background": p.ui.statusBar.background, // the long bar at the bottom of the main window
    "statusBar.border": p.ui.statusBar.border,
    "statusBar.foreground": p.ui.statusBar.itemsForeground,
    "statusBar.debuggingBackground": p.ui.statusBar.debuggingBackground,
    "statusBar.debuggingBorder": p.ui.statusBar.debuggingBorder,
    "statusBar.debuggingForeground": p.ui.statusBar.debuggingForeground,
    "statusBar.noFolderBackground": p.ui.statusBar.noFolderBackground,
    "statusBar.noFolderBorder": p.ui.statusBar.noFolderBorder,
    "statusBar.noFolderForeground": p.ui.statusBar.noFolderForeground,
    "statusBar.offlineBackground": p.ui.statusBar.offlineBackground,
    "statusBar.offlineForeground": p.ui.statusBar.offlineForeground,
    "statusBarItem.hoverBackground": p.ui.statusBar.itemsHoverBackground,
    "tab.activeBackground": p.ui.tabs.activeBackground,
    "tab.activeBorder": p.ui.tabs.activeBorderBottom,
    "tab.activeBorderTop": p.ui.tabs.activeBorderTop,
    "tab.activeForeground": p.ui.tabs.activeForeground,
    "tab.border": p.ui.tabs.activeLeftAndRightBorder,
    "tab.inactiveBackground": p.ui.tabs.inactiveBackground,
    "tab.inactiveForeground": p.ui.tabs.inactiveForeground,
    "tab.unfocusedActiveForeground": p.ui.tabs.unfocusedActiveForeground,
    "tab.unfocusedInactiveForeground": p.ui.tabs.unfocusedInactiveForeground,
    "titleBar.activeBackground": p.ui.titleBar.background,
    "titleBar.activeForeground": p.ui.titleBar.foreground,
    "titleBar.border": p.ui.titleBar.border,
    "titleBar.inactiveBackground": p.ui.titleBar.inactiveBackground,
    "titleBar.inactiveForeground": p.ui.titleBar.inactiveForeground,
    "tree.indentGuidesStroke": p.ui.lists.treeIndentGuideStroke,
    focusBorder: p.ui.global.globalFocusBorder, // global focused border color. Used when not overriden.
  };
}
