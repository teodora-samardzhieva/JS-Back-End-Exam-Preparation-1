import { Router } from "express";

import homeController from "./controllers/homeController.js";
import errorController from "./controllers/errorController.js";
import userController from "./controllers/userController.js";

const routes = Router();

routes.use(homeController);

// TODO: Add routes here
routes.use('/users', userController); // everything that starts with /users goes to userController

routes.use(errorController);

export default routes;