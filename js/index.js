//update content function
const update = () => {
  const res = document.getElementById('result').contentWindow.document; //get DOM el
  res.open();
  //value for html
  res.write(editorh.getValue()); //to get value inserted in div
  //value for css
  res.write(`<style> ${editorc.getValue()} </style>`);
  res.close();
};

//function setEditor
const setEditor = () => {

  ace.require("ace/ext/language_tools"); 
  //html editor
  window.editorh = ace.edit('htmleditor', {
    theme: "ace/theme/tomorrow_night_eighties",
    mode: "ace/mode/html",
    maxLines: 30,
    wrap: true,
    autoScrollEditorIntoView: true,
    tabSize:1,
    highlightActiveLine: true,
  })

  //css editor
  window.editorc = ace.edit('csseditor', {
    theme: "ace/theme/tomorrow_night_eighties",
    mode: "ace/mode/css",
    maxLines: 30,
    wrap: true,
    autoScrollEditorIntoView: true,
    tabSize:1,
    highlightActiveLine: true,
  })

  //add autocompletion functionality
  editorc.setOptions({
    enableBasicAutocompletion: true,  //basic autocompletion
    // enableSnippets: true,           //thnaks for the snippets
    enableLiveAutocompletion: true, //live autocompletion
   });

   //add autocompletion functionality
  editorh.setOptions({
    enableBasicAutocompletion: true,  //basic autocompletion
    // enableSnippets: true,           //thnaks for the snippets
    enableLiveAutocompletion: true, //live autocompletion
   });

   editorh.setOption({
    enableEmmet: true,
   });

  //on change we update  html iframes to show result
  editorh.getSession().on('change', () => {
    update(); //create update function
  });
  
  //css function update
  editorc.getSession().on('change', () => {
    update(); //create update function
  });

}

setEditor();