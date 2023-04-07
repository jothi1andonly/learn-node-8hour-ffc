const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("Welcome to our homepage")
        res.end()
    }
    if(req.url == '/about'){
        res.write("This is the about page")
        res.end()
    }
    res.write(`<h1>OOPS !</h1>
               <p>The requested page does not exist</p>
               <a href='/'> Back Home</a>`)
    res.end()
})
server.listen(8080)
