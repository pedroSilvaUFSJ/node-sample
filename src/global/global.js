global.MyAppTest = {
    helloWord() {
        console.log('hello world!!!');
    },
    name: 'MyAppTest Global Object'
}

global.MyAppTestFinal = Object.freeze({
    helloWord() {
        console.log('hello world!!!');
    },
    name: 'MyAppTest Global Final Object'
})

variable1 = 'outter 1'
let variable2 = 'outter 2'

console.log(global.variable1)
console.log(global.variable2)

console.log('this === global:::', this === global)
console.log('this === module:::', this === module)
console.log('this === module.exports:::', this === module.exports)
console.log('module.exports === exports:::', module.exports === exports)
console.log('###############################\n')
function logThis() {
    variable1 = 'inner 1'
    console.log('inner 1::', global.variable1)

    variable2 = 'inner 2'
    console.log('inner 2::', global.variable2)
    this.variable2 = 'inner 3'
    console.log('inner 3::', global.variable2)

    console.log('inside a function this === global:::', this === global)
    console.log('inside a function this === module:::', this === module)
    console.log('inside a function this === module.exports:::', this === module.exports)
}
logThis()