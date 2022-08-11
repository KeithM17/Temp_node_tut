const {readFile} = require('fs')

console.log('Starting the task')

//check File path
readFile('../content/first.txt','utf8', (err,result) => {

  if (err){
    console.log(err)
    return
  }

  console.log(result)
  console.log('Complete first task')
})

console.log("Starting next task")