const http = require('http')

const server = http.createServer((req,res)=>{

  if (req.url === '/'){
    res.end('Server is running under end')
  }

  if (req.url === '/about'){
    res.end('This is the about page')
  }

})

server.listen(5000)