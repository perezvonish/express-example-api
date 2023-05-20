import { Router } from 'express';

const authController = Router();

authController.post("login", () => {
    console.log("login route")
})

authController.post("register", () => {
    console.log("register route")
})

export default authController;