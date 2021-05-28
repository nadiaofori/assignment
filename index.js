const express = require('express')
const routes = require('./routes')

const app = express();
// cors = require('cors')
const port = 5000

app.use(express.json())
// app.use(cors())
app.use('/api/v1', routes)

// app.get("/",(req,res) =>{
//      res.status(200).send("Hello World")
// })

app.listen(port,() => console.log(`'server is running at port ${port}......'`))