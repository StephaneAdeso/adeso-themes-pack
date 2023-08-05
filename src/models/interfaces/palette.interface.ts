export interface Palette {
  /** colors of the vscode user interface */
  ui: {
    /** top menu bar */
    titleBar: {
      background: string;
      border: string;
      foreground: string;
      inactiveBackground: string;
      inactiveForeground: string;
    };
    activityBar: {
      activeIcon: string;
      activeIconBorder: string;
      background: string;
      border: string;
      inactiveIcons: string;
      bottomBadgeBackground: string;
      bottomBadgeForeground: string;
    };
    /** trees and list windows */
    sideBar: {
      background: string;
      border: string;
      itemsForeground: string;
      sectionHeaderBackground: string;
      sectionHeaderLineBorder: string;
      sectionHeaderForeground: string;
      titleForeground: string;
    };
    statusBar: {
      background: string;
      itemsForeground: string;
      border: string;
      itemsHoverBackground: string;
    };
    tabs: {
      activeBackground: string;
      activeLeftAndRightBorder: string;
      activeBorderTop: string;
      activeBorderBottom: string;
      activeForeground: string;
      inactiveBackground: string;
      inactiveForeground: string;
      unfocusedActiveForeground: string;
      unfocusedInactiveForeground: string;
    };
    /** main menus and pop windows like command palette */
    menus: {
      background: string;
      buttonBackground: string;
      hoverBackground: string;
      inputBackground: string;
      foreground: string;
    };
    /** lists, trees, and quick input */
    lists: {
      listActiveSelectionBackground: string;
      listActiveSelectionForeground: string;
      listFocusOutline: string;
      listFocusKeyboardBackground: string;
      listItemHoverBackground: string;
      quickInputBackground: string;
      quickInputForeground: string;
      quickInputFocusBackground: string;
      treeIndentGuideStroke: string;
    };
    editor: {
      background: string;
      inlayHintBackground: string;
      inlayHintForeground: string;
      lineActiveNumber: string;
      lineNumbersRulers: string;
      lineNumbersColumnBackground: string;
      lineSeparator: string;
      selectedLineBorder: string;
      groupHeaderTabsBackground: string;
      indentLineColor: string;
      foreground: string;
    };
    /** bottom panel used for terminal, debug console, etc */
    panel: {
      background: string;
      border: string;
    }
    global: {
      mainBackground: string; // TODO: maybe move this to editorPanel
      windowResizeline: string;
      scrollbarButtonColor: string;
      scrollbarShadow: string;
      globalForeground: string; // text color for items that dont have a specific configuration
      globalFocusBorder: string; // global focused border color. Used when not overriden.
    };
  };

  /** colors of the text editor */
  code: {
    boolean: string;
    comment: string;
    func: string;
    keyword: string;
    numeric: string;
    punctuation: string;
    string: string;
    type: string;
    typePrimitive: string;
    usedProperties: string;
    variable: string;
  };
}
