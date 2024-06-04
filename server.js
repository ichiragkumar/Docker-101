import express from "express"
import dotenv from "dotenv"
import connectDB from "./dbConfig/db.js";
import urlRoutes from "./routes/Url.route.js"


dotenv.config();



const app = express()
const PORT = process.env.PORT || 5000
console.log(PORT);

app.use(express.json())

app.use("/api/v1/urls", urlRoutes)

app.get("/", (req, res)=>{
    console.log("i reached here");
    res.send("welcomr to docker running")
})

const startServer = ()=>{
    try {
        // connect to db
        connectDB()

        // and start listening to server
        app.listen(PORT, () => console.log(`Server started listening on PORT: ${PORT}`));

    } catch (error) {
        console.error(error)
        
    }
}

startServer()