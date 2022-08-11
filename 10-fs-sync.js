//Sync Methods
const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

//reading from a textfile
console.log(first)
console.log(second)

//write to a textfile
writeFileSync('./content/result-sync.txt', 
              `Here is the result ${first}, ${second}`, {flag:'a'})










