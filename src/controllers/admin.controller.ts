import {Router} from "express";

const adminController = Router()

adminController.post("/ban", (req, res) => {
    console.log("ban")
})

export default adminController;