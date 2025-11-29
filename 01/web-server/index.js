// reverse proxy server with express ( nginx better )
const express = require('express')
const proxy = require('express-http-proxy')
const helmet = require('helmet')

const app = express()
const port = 8000

app.use(helmet())

app.use('/api',proxy('http://localhost:8080'))
app.use('/',proxy('http://localhost:3000'))

app.listen(port,()=>{
    console.log(`web server app listening in port ${port}`)
})