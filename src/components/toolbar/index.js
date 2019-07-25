import getSelectionPosition from "../../handlers/getSelectionPosition";

export default class Toolbar {

    render () {

                if (document.getElementById('toolbarContainer')) {
                    console.log('clicked');
                    document.getElementById('toolbarContainer').remove();
                }
                const selection = window.getSelection();

                if (selection.toString() != ''){

                    const rect = getSelectionPosition(selection);

                    const container = document.createElement('div');
                    container.setAttribute('id', 'toolbarContainer');


                    container.innerHTML = `
                        <div id='toolbar' style='position: fixed; border: 2px solid black; height: 20px; width: 100px; top: ${rect.top - 30}px; left: ${rect.left}px;' >
                            <button id="boldToolbarButton" >B</button>
                            <button id="italicToolbarButton" >I</button>
                        </div>
                    `


                    const rte = document.getElementById('richTextEditor');
                    rte.appendChild(container);

                    const toolbar = document.getElementById('toolbar');
                    toolbar.addEventListener('click', function(e) {

                        if (e.target.id == 'boldToolbarButton') {
                            document.execCommand('bold');
                        } else if (e.target.id == 'italicToolbarButton') {
                            document.execCommand('italic');
                        }
                    })
                }


        }
}
