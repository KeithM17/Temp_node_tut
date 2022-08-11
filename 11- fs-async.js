//Async Method
const {readFile, writeFile} = require('fs')

//reading from a first textfile
readFile('./content/first.txt', 'utf8', (err,result) =>{
  if(err){
    console.log(err)
    return
  }
  console.log(result)

  const first = result

  //reading from a  second textfile
  readFile('./content/second.txt', 'utf8', (err,result) =>{
      if(err){
        console.log(err)
        return
      }
      console.log(result)
      const second = result

      //write to a textfile
      writeFile('./content/result-async.txt', 
                `Here is the result ${first}, ${second}`, ()=>{
                  if(err){
                    console.log(err)
                    return
                  }
                  console.log(result)
                  })
  })
  
})