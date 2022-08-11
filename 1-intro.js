
//Globals - NO Window!!

//_dirname  - path to current directory
//_filename - file name
// module   - info about current modules
// require  - function to use modules(commonJS) 
// process  - info about env where the program is being excuted

console.log(__dirname)

setInterval(() => {
  console.log('Hello world')
},1000);

const amount = 11

if (amount < 10){
  console.log('Smaller Number')
}
else{
  console.log('Large Number')
}

console.log('Hey Its My Node Tutorial INTRO')