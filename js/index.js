

//function setEditor
const setEditor = () => {

  ace.require("ace/ext/language_tools"); 
  //html editor
  window.editor = ace.edit('htmleditor', {
    theme: "ace/theme/tomorrow_night_eighties",
    mode: "ace/mode/html",
    maxLines: 30,
    wrap: true,
    autoScrollEditorIntoView: true,
    tabSize:1,
    highlightActiveLine: true,
  })

  //css editor
  window.editor = ace.edit('csseditor', {
    theme: "ace/theme/tomorrow_night_eighties",
    mode: "ace/mode/css",
    maxLines: 30,
    wrap: true,
    autoScrollEditorIntoView: true,
    tabSize:1,
    highlightActiveLine: true,
  })

  

}

setEditor();