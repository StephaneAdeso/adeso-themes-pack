export interface Palette {
  /** colors of the vscode user interface */
  ui: {
    activityBar: {
      activeIcon: string;
      inactiveIcons: string;
    };
    /** main menus and pop windows like command palette */
    menus: {
      background: string;
      hoverBackground: string;
      quickInputBackground: string;
      quickInputListBackground: string;
    };
    /** trees and list windows */
    trees: {
      activeItem: string;
      focusItemBackground: string
      hoverItemBackground: string
      inactiveSelectionBackground: string
    };
    editorWindow: {
      inlineHintBackground: string;
      lineActiveNumber: string;
      lineNumbersRulers: string;
      lineSeparator: string;
    };
    general: {
      mainBackground: string; // TODO: maybe move this to editor windows
      windowResizeline: string;
      scrollbarButtonBackground: string;
    };
    tabs: {
      background: string;
      borders: string;
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
