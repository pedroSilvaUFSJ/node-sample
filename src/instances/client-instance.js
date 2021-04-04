const firstCounter = require('./instance')
const secondCounter = require('./instance')

const thirdCounter = require('./new-instance')()
const forthCoutner = require('./new-instance')()

firstCounter.inc()
firstCounter.inc()
firstCounter.inc()

thirdCounter.inc()
thirdCounter.inc()


console.log("singleton instance:::", ' firstCounter:', firstCounter.valueAttribute, 'secondCounter:', secondCounter.valueAttribute)
console.log("diff instance:::", ' thirdCounter:', thirdCounter.valueAttribute, 'forthCoutner:', forthCoutner.valueAttribute)