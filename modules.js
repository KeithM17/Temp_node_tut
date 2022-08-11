//CommonJS, every file is a module(by Default)
//Modules - Encapsulated code (only share minimum)

const sayHi = require('./5-utils');

//Structure 1
const names = require('./4-names')

console.log('Structure 1')
sayHi('Suzy')
sayHi(names.john)
sayHi(names.pieter)

//Structure 2
//const {john, pieter} = require('./4-names')
//
//console.log('Structure 2')
//sayHi('Suzy')
//sayHi(john)
//sayHi(pieter)

//Alternate exports
const expData = require('./6-exports')
console.log(expData)

//Mind grenade
require('./7-mind-grenade')





