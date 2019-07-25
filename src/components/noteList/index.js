import * as css from './index.css'


// Todo: replace with ajax
const DATA = [
    {
        title:"First note",
        lead:"this is mock data"
     },
     {
        title:"Second note",
        lead:"this is mock data"
     },
     {
        title:"Third note",
        lead:"this is mock data"
     }
]



export default class NoteList {
    constructor (elem) {
      if (!elem) return
      this.elem = elem
    }

    render () {

        const list = DATA.map(item => {
            return `
            <div data-component="note-item">
                <div data-component="note-content">
                    <h3>${item.title}</h2>
                    <p>${item.lead}</p>
                </div>
            </div>
        `;
        }).join("")

        if (this.elem) this.elem.innerHTML = `
            <div >
                ${list}
            </div>
        `
    }
}
