import * as dotenv from "dotenv"
dotenv.config();
import express from "express"
import cors from 'cors';

import routes from "./src/config/controllers";
import postsController from "./src/controllers/posts.controller";

const app = express();

app.use(cors);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', routes.authController)
app.use('/admin', routes.adminController)
app.use('/users', routes.usersController)
app.use('/posts', routes.postsController)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server started on port --> ${process.env.SERVER_PORT}`)
})