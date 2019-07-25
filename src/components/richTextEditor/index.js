import * as css from './index.css'
import Toolbar from '../toolbar'

export default class RichTextEditor {
    constructor (elem) {
      if (!elem) return
      this.elem = elem
    }


    render () {

        if (this.elem) this.elem.innerHTML = `
            <div data-component="richTextEditor" contenteditable="true" >
                    <h1 contenteditable="inherit" placeholder="Enter title here..."></h1>
                    <div contenteditable="inherit" placeholder="Enter content here..."></div>
            </div>
        `


        document.addEventListener('mouseup', function () {
            if (window.getSelection()) {
                const toolbar = new Toolbar()
                toolbar.render();
            }

        })

    }
}
