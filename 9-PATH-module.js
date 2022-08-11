const path = require('path')

//path seperator
const seperator = path.sep
console.log(seperator)

//Get content folder path
const filePath = path.join('/content/', 'subfolder','text.txt')
console.log(filePath)

//Get base file in FilePath
const base = path.basename(filePath);
console.log(base)

const absolute = path.resolve(__dirname, 'Content', 'subfolder', 'test.txt')
console.log(absolute)
