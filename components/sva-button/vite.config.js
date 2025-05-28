import { resolve } from 'path'

export default {
    build: {
        lib: {
            entry: resolve(__dirname, 'src/sva-button.js'),
            name: 'sva-button',
            fileName: 'sva-button'
        }
    }
}