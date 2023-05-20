import {Router} from "express";

const postsController = Router();

postsController.get("/:id", (req, res) => {
    console.log("getOrder")
    console.log(req.params.id)
})

postsController.post("/create", (req, res) => {
    console.log("createPost")
})

postsController.post("/delete", (req, res) => {
    console.log("deletePosts")
})

postsController.patch("/edit/:id", (req, res) => {
    console.log("editPost")
})

export default postsController;