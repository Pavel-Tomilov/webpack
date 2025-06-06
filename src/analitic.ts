import * as $ from 'jquery' 

function createAnalitic (): object {
    let counter = 0;
    let destroyed: boolean = false;

    const listener = (): number => counter++;

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

window['analitic'] = createAnalitic()