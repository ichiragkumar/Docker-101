import express from "express"
import dotenv from "dotenv"
import connectDB from "./dbConfig/db.js";
dotenv.config();



const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())


app.get("/",async (req, res)=>{
    console.log("i am running");
    res.json({msg:"welcome"})
})

const startServer = ()=>{
    try {
        // connect to db
        connectDB()

        // and start listening to server
        app.listen(()=>{
            console.log(`server is running ... `);
        })
    } catch (error) {
        console.error(error)
        
    }
}

startServer()