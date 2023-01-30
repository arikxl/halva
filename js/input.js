export class InputHandler {
    constructor() {
        this.keys = [];
        window.addEventListener('keydown', e => {
            if ((e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === '1'
            ) && this.keys.indexOf(e.key) === -1) {
                this.keys.push(e.key);
            }
            // console.log('e.key:', e.key)
        })

        window.addEventListener('keyup', e => {
            if (e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === '1'
            ) {
                this.keys.splice(this.keys.indexOf(e.key), 1)
            }
        })
    }
}