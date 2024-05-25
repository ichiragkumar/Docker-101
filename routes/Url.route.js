import express from "express"
import { createShortUrl, getUrls , getUrl} from "../controllers/Url.controller.js"
const router = express.Router()


router.post("/createUrl",createShortUrl)


// get all the urls
router.get("/", getUrls)

// getting a specific url , ny using shorturl we have
router.get("/:shortUrl", getUrl)

export default router