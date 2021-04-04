const fs = require('fs')

const path = __dirname + '/../../assets/file-sistem.json'

//sync
const content = fs.readFileSync(path, 'utf-8')
console.log("sync::\n", content)

//async
fs.readFile(path, 'utf-8', (err, response) => { console.log('async::\n', response) })

//just import file
const bdconfig = require('../../assets/file-sistem.json')
console.log('bdconfig:::', bdconfig)


/**
 * check files inside this directory (folder the file is in)
 */
fs.readdir(__dirname, (err, files) => {
    console.log('files::', files)
    if (err)
        console.log('err::', err)
})
