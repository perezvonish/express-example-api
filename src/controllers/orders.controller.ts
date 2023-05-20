import {Router} from "express";

const orderController = Router();

orderController.get("/:id", (req, res) => {
    console.log("getOrder")
    console.log(req.params.id)
})

export default orderController;