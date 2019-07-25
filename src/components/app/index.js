import * as css from './index.css'
import RichTextEditor from '../richTextEditor'
import NoteList from '../noteList'


export default class App {
    constructor (elem) {
      if (!elem) return
      this.elem = elem
    }

    render () {

        if (this.elem) this.elem.innerHTML = `
          <section data-component="app">
            <div id="noteList" data-component="note-list"></div>
            <div id="richTextEditor" data-component="rich-text-editor"></div>
          </section>
        `

        const rte = new RichTextEditor(document.getElementById('richTextEditor'));
        const noteList = new NoteList(document.getElementById('noteList'))


        rte.render();
        noteList.render();

    }
}
