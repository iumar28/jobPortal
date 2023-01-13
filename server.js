const express = require("express")
// const dotenv=require("dotenv")
const connectDB = require("./config/conn")

const morgan = require("morgan")
const app = express()

// config dotenv
// dotenv.config({path:"server/config/config.env"})

// connection

connectDB()


app.use(express.json())


app.use(morgan('dev'))
app.use('/api/job1',require("./routes/jobRoutes"))

app.get('/',(req,res)=>{
    res.send("hi bhain")
})

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log("server listening on port 8000")
})


