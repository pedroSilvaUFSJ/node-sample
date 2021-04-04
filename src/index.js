/**
 * runs the axios request
 */
//const axiosTest = require('./axios/axios')

/**
 * runs the different ways of using scopes
 */
//const globalTest = require('./global/client-global')

/**
 * runs how to use singleton module and different objects from the same module...
 */
//const instancesTest = require('./instances/client-instance')

/**
 * runs scrips related to file treatings
 */
//const fileTest = require('./file/client-file')

/**
 * runs scrips related to middleware pattern (chain of responsability)
 */
//const middlewaresTest = require('./middlewares/middlewares')

/**
 * runs a project running on express
 */
//const serverTest = require('./server/server')

/**
 * runs a job scheduled
 */
// const serverTest = require('./job-schedule/timing')3

/**
 * using console input/output
 */
const argumentsFromConsole = process.argv  //get array of values used on node command
console.log('argumentsFromConsole', argumentsFromConsole)
process.stdout.write(`tell me something\n`)
process.stdin.on('data', data => {
    const outside = data.toString()
    process.stdout.write(`you told me::${outside}!!!`)
    process.exit()
})