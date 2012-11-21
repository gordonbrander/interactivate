"use strict";

var interactivate = require("./interactivate")

var CodeMirror = require("./code-mirror")
var activeLine = require("./code-mirror/active-line")
var persist = require("./code-mirror/persist")

var editor = CodeMirror(document.body, {
  electricChars: true,
  autofocus: true,
  theme: "solarized dark",
  mode: "javascript",
  extraKeys: {
    "Tab": function indent(editor) {
      if (!editor.getOption("indentWithTabs")) {
        var size = editor.getOption("indentUnit")
        var indentation = Array(size + 1).join(" ")
        editor.replaceSelection(indentation, "end")
      }
    }
  }
})

// Enable interactive mode for this editor.
interactivate(editor)
// Enable active line highlighting.
activeLine(editor)
// Enable persistence of the editor buffer.
persist(editor)
