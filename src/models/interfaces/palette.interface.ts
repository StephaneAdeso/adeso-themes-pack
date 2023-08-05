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
      indentGuideStroke: string;
      itemsborderLine: string;
      itemsFocusBackground: string;
      itemsForeground: string;
      itemsActiveSelectedForeground: string;
      itemsHoverBackground: string;
      itemsSelectedBackground: string;
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
      hoverBackground: string;
      inputBackground: string;
      quickInputListBackground: string;
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
      QuickInputFocusBackground: string;
      treesIndentGuideStroke: string;
    };
    editorPanel: {
      inlineHintBackground: string;
      lineActiveNumber: string;
      lineNumbersRulers: string;
      lineSeparator: string;
      selectedLineBorder: string;
    };
    terminalPanel: {
      background: string;
      Foreground: String;
    }
    general: {
      mainBackground: string; // TODO: maybe move this to editorPanel
      windowResizeline: string;
      scrollbarButtonBackground: string;
      globalForeground: string; // text color for items that dont have a specific configuration
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
