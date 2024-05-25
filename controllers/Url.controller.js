import Url from "../models/Url.model.js";

const createShortUrl = async (req, res, next) => {
    try {
            const  { originalUrl } = req.body

            const shortUrl = Math.random().toString(16).substring(2,6)
            if(!originalUrl){
                return next(new Error("originalUrl is required"));
            }

            // check weather exist alreay in db or not
            const isUrlExist = await Url.findOne({originslUrl:originalUrl})
            if(isUrlExist){
                return res.status(409).json({msg:"Already Exist"})
            }

            const newUrl = await Url.create({
                originslUrl:originalUrl,
                shortUrl
            })


            res.status(201).json({success:true,newUrl})



    } catch (error) {
     console.error(error);   
     return res.status(500).json({msg:"Internal server error"})
    }

}


export { 
    createShortUrl 
}