import {Router} from "express";

const usersController = Router()

usersController.get("/:id", (req, res) => {
    console.log("findUserById")
    console.log(req.params.id)
})

export default usersController;