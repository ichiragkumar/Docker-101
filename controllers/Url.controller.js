import Url from "../models/Url.model.js";

const createShortUrl = async (req, res, next) => {
    try {
            const  { originalUrl } =await req.body

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


const getUrls = async (req, res, next) =>{
        try {
            const getAllUrls = await Url.find({})
            res.status(200).json({getAllUrls})
            
        } catch (error) {
            console.error(error);   
            return res.status(500).json({msg:"Internal server error"})
        }
}


// fettching specific url by shortUrl
const getUrl = async(req, res, nest)=>{
    try {
        
        const {shortUrl} =await req.params
        if(!shortUrl){
            return res.stauts(404).json({msg:"Short url required"})

        }

        const url = await Url.findOne({shortUrl:shortUrl})
        if(!url){
            return res.status(404).json({msg:"url not fond"})
        }

        res.status(200).json({success:true,url})

    } catch (error) {
        console.error(error);   
        return res.status(500).json({msg:"Internal server error"})
    }
}

export { 
    createShortUrl,
    getUrls,
    getUrl,
}