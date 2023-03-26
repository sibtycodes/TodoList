const express = require('express');
const app = express()
const cors = require("cors")
const db = require("./models")
const taskapi = require("./routes/taskapi")
const userapi = require("./routes/userapi")

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.use("/",taskapi)
app.use("/users",userapi)

db.sequelize.sync()
.then(()=>{
    app.listen(5000,()=>{console.log("http://localhost:5000");})
})

