import mongoose from "mongoose";


const connectDB= async () =>{
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL)
        console.log(`mongoDB connected ${conn.connection.host} `);

        
    } catch (error) {
        console.error(error)
    }
}

export default connectDB