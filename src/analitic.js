import * as $ from 'jquery' 

function createAnalitic () {
    let counter = 0;
    let destroyed = false;

    const listener = () => counter++;

$(document).on('click',listener)
return {
    destroy() {
        $(document).off('click',listener)
        destroyed = true;
    },

    getClicks() {
        if(destroyed) {
            return 'Analitic is destroyed. Total clicks'
        }
        return counter
    }
}
}

window.analitic = createAnalitic()