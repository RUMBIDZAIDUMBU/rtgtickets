const { watch } = require('fs/promises')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'script.js'
    },
    watch:true
}