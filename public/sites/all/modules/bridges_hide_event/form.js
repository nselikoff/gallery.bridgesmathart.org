var warning = true;
window.onbeforeunload = function() {
    if (warning) {
        return 'It looks like you are in the middle of filling out a submission. If you close the window or navigate away now, your submission will not be saved.';
    }
}

window.onload = function() {

document.getElementById('edit-submit').onclick = function() {
    warning = false;
}

document.getElementById('edit-delete').onclick = function() {
    warning = false;
}

}
