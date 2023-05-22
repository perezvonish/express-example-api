import * as dotenv from "dotenv"
dotenv.config();
import * as express from "express"
import * as cors from 'cors';

import routes from "./src/config/controllers";
import {initMongo} from "./src/infrastructure/mongo/connection.source";
import {Express} from "express";
import myDataSource from "./src/infrastructure/postgre/data-source";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', routes.authController)
app.use('/admin', routes.adminController)
app.use('/users', routes.usersController)
app.use('/posts', routes.postsController)

async function init(app: Express) {
    try {
        await myDataSource.initialize()
        await initMongo();
    }
    catch (err){
        throw new Error(err);
    }

    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server started on port --> ${process.env.SERVER_PORT}`)
    })
}

init(app);