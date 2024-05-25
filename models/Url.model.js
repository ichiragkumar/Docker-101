import mongoose, { Schema } from "mongoose";


const UrlSchema = new mongoose.Schema({

    originslUrl:{
        type:String,
        required: true,

    },

    shortUrl:{
        type:String,
        required:true,
        unique:true,

    }

},
    {
        timestamps:true
    }

)


const Url =mongoose.models.urls || mongoose.model("urls", UrlSchema)
export default Url
