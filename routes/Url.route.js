import express from "express"
import { createShortUrl } from "../controllers/Url.controller.js"
const router = express.Router()


router.post("/createUrl",createShortUrl)

export default router