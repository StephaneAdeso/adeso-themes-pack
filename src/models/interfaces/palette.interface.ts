export interface Palette {
  /** colors of the vscode user interface */
  ui: {
    /** top menu bar */
    titleBar: {
      background: string;
      foreground: string;
      inactiveBackground: string;
      inactiveForeground: string;
    };
    activityBar: {
      activeIcon: string;
      inactiveIcons: string;
    };
    /** trees and list windows */
    sideBar: {
      activeItem: string;
      focusItemBackground: string;
      hoverItemBackground: string;
      inactiveSelectionBackground: string;
      borderLine: string;
    };
    statusBar: {
      barBackground: string;
      barForeground: string;
      iconBackground: string;
    };
    tabs: {
      background: string;
      borders: string;
    };
    /** main menus and pop windows like command palette */
    menus: {
      background: string;
      hoverBackground: string;
      inputBackground: string;
      quickInputListBackground: string;
      text: string;
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
