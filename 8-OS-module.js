const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)


//method returns System Uptime(sec)
const uptime = os.uptime() /3600
console.log(`System Uptime: ${uptime} Hrs`)

//Basic OS methods in a property
const currentOS = {
  name : os.type(),
  release: os.release(),
  TotalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS)