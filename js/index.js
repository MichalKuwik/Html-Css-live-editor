

//function setEditor
const setEditor = () => {

  //html editor
  window.editor = ace.edit('htmleditor', {
    theme: "ace/theme/dracula",
    mode: "html",
    maxLines: 30,
    wrap: true,
    autoScrollEditorIntoView: true,
    tabSize:1,
    highlightActiveLine: true,
  })

}

setEditor();