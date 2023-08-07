export interface Palette {
  /** colors of the vscode user interface */
  ui: {
    /** top menu bar */
    titleBar: {
      background: string | null;
      border: string | null;
      foreground: string | null;
      inactiveBackground: string | null;
      inactiveForeground: string | null;
    };
    activityBar: {
      activeIcon: string | null;
      activeIconBorder: string | null;
      background: string | null;
      border: string | null;
      bottomBadgeBackground: string | null;
      bottomBadgeForeground: string | null;
      inactiveIcons: string | null;
    };
    breadcrumbs: {
      background: string | null;
      foreground: string | null;
    };
    minimap: {
      background: string | null;
    };
    /** trees and list windows */
    sideBar: {
      background: string | null;
      border: string | null;
      itemsForeground: string | null;
      sectionHeaderBackground: string | null;
      sectionHeaderForeground: string | null;
      sectionHeaderLineBorder: string | null;
      titleForeground: string | null;
    };
    statusBar: {
      background: string | null;
      border: string | null;
      debuggingBackground: string | null;
      debuggingBorder: string | null;
      debuggingForeground: string | null;
      itemsForeground: string | null;
      itemsHoverBackground: string | null;
      noFolderBackground: string | null;
      noFolderBorder: string | null;
      noFolderForeground: string | null;
      offlineBackground: string | null;
      offlineForeground: string | null;
    };
    tabs: {
      activeBackground: string | null;
      activeBorderBottom: string | null;
      activeBorderTop: string | null;
      activeForeground: string | null;
      activeLeftAndRightBorder: string | null;
      inactiveBackground: string | null;
      inactiveForeground: string | null;
      unfocusedActiveForeground: string | null;
      unfocusedInactiveForeground: string | null;
    };
    /** main menus and pop windows like command palette */
    menus: {
      background: string | null;
      buttonBackground: string | null;
      foreground: string | null;
      hoverBackground: string | null;
      inputBackground: string | null;
    };
    /** lists, trees, and quick input */
    lists: {
      listActiveSelectionBackground: string | null;
      listActiveSelectionForeground: string | null;
      listFocusKeyboardBackground: string | null;
      listFocusOutline: string | null;
      listItemHoverBackground: string | null;
      quickInputBackground: string | null;
      quickInputFocusBackground: string | null;
      quickInputForeground: string | null;
      treeIndentGuideStroke: string | null;
    };
    editor: {
      activeIndentGuideColor: string | null;
      background: string | null;
      foreground: string | null;
      groupBorder: string | null;
      groupHeaderTabsBackground: string | null;
      indentGuideColor: string | null;
      inlayHintBackground: string | null;
      inlayHintForeground: string | null;
      lineActiveNumber: string | null;
      lineNumbersColumnBackground: string | null;
      lineRulersNumbers: string | null;
      scrollbarLineSeparator: string | null;
      selectedLineBorder: string | null;
    };
    /** bottom panel used for terminal, debug console, etc */
    panel: {
      background: string | null;
      border: string | null;
    }
    global: {
      globalFocusBorder: string | null; // global focused border color. Used when not overriden.
      globalForeground: string | null; // text color for items that dont have a specific configuration
      scrollbarButtonColor: string | null;
      scrollbarShadow: string | null;
    };
  };

  /** colors of the text editor */
  code: {
    boolean: string | null;
    comment: string | null;
    func: string | null;
    keyword: string | null;
    numeric: string | null;
    punctuation: string | null;
    string: string | null;
    type: string | null;
    typePrimitive: string | null;
    usedProperties: string | null;
    variable: string | null;
  };
}
