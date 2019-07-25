import getSelectionRange from './getSelectionRange'

export default function surroundSelection(selection, element) {

    console.log('surroundSelection got called !')
    const range = getSelectionRange(selection).cloneRange();
    // place the element around range
    range.surroundContents(element);
    // substitute previous selection with new range
    selection.removeAllRanges();
    selection.addRange(range);
}
