export default function getSelectionRange(selection) {
    if (selection) {
        if (selection.rangeCount) {
            // get what's inside the range
            return selection.getRangeAt(0)
        }
    }
}
