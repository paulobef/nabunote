
import getSelectionRange from './getSelectionRange'

export default function getSelectionPosition(selection) {
    return getSelectionRange(selection).getBoundingClientRect()
}
