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
      bottomBadgeBackground: string;
      bottomBadgeForeground: string;
      inactiveIcons: string;
    };
    breadcrumbs: {
      background: string;
      foreground: string;
    };
    minimap: {
      background: string;
    };
    /** trees and list windows */
    sideBar: {
      background: string;
      border: string;
      itemsForeground: string;
      sectionHeaderBackground: string;
      sectionHeaderForeground: string;
      sectionHeaderLineBorder: string;
      titleForeground: string;
    };
    statusBar: {
      background: string;
      border: string;
      itemsForeground: string;
      itemsHoverBackground: string;
    };
    tabs: {
      activeBackground: string;
      activeBorderBottom: string;
      activeBorderTop: string;
      activeForeground: string;
      activeLeftAndRightBorder: string;
      inactiveBackground: string;
      inactiveForeground: string;
      unfocusedActiveForeground: string;
      unfocusedInactiveForeground: string;
    };
    /** main menus and pop windows like command palette */
    menus: {
      background: string;
      buttonBackground: string;
      foreground: string;
      hoverBackground: string;
      inputBackground: string;
    };
    /** lists, trees, and quick input */
    lists: {
      listActiveSelectionBackground: string;
      listActiveSelectionForeground: string;
      listFocusKeyboardBackground: string;
      listFocusOutline: string;
      listItemHoverBackground: string;
      quickInputBackground: string;
      quickInputFocusBackground: string;
      quickInputForeground: string;
      treeIndentGuideStroke: string;
    };
    editor: {
      activeIndentGuideColor: string;
      background: string;
      foreground: string;
      groupBorder: string;
      groupHeaderTabsBackground: string;
      indentGuideColor: string;
      inlayHintBackground: string;
      inlayHintForeground: string;
      lineActiveNumber: string;
      lineNumbersColumnBackground: string;
      lineRulersNumbers: string;
      scrollbarLineSeparator: string;
      selectedLineBorder: string;
    };
    /** bottom panel used for terminal, debug console, etc */
    panel: {
      background: string;
      border: string;
    }
    global: {
      globalFocusBorder: string; // global focused border color. Used when not overriden.
      globalForeground: string; // text color for items that dont have a specific configuration
      scrollbarButtonColor: string;
      scrollbarShadow: string;
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
