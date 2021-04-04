require('./global')

/**
 * the same object can be hit by global or just with the object's name
 */
console.log(global.MyAppTest.name)
console.log(MyAppTest.name)

/**
 * if it's not freezed, the value changed is globally overriden
 */
MyAppTest.name = 'overriden Test name'
console.log(global.MyAppTest.name)
console.log(MyAppTest.name)

/**
 * if it's freezed, the value can be changed
 */
console.log(MyAppTestFinal.name)
MyAppTest.name = 'overriden Test name'
console.log(MyAppTestFinal.name)