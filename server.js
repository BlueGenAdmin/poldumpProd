const dotenv = require("dotenv")
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const path = require("path")


const connectDB = require("./server/database/connection")



const app = express();
dotenv.config({path : '.env'})
const PORT  = process.env.PORT || 8080


app.use(morgan('tiny'));

connectDB();

app.use(bodyParser.urlencoded({extended : true}))
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "./public/pages"))
app.use("/css", express.static(path.resolve(__dirname, "./public/assets/css")))
app.use("/fonts", express.static(path.resolve(__dirname, "./public/assets/fonts")))
app.use("/img", express.static(path.resolve(__dirname, "./public/assets/img")))
app.use("/js", express.static(path.resolve(__dirname, "./public/assets/js")))
app.use("/scss", express.static(path.resolve(__dirname, "./public/assets/scss")))




//display routes

// app.use('/',require('./'))


app.use('/',require('./server/routes/admin/displayRoutes'))
app.use("/budgetReports",require('./server/routes/admin/budjetReportsRoutes'))
app.use("/units",require('./server/routes/admin/unitsRoutes'))


 app.listen(PORT,()=>{ 
    console.log(`Server is running on http://localhost:${PORT}`)
 })



