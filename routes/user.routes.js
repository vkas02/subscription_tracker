import {Router} from 'express';
import {getUser, getUsers} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";
const userRoute = Router();


userRoute.get('/',authorize, getUsers);
userRoute.get('/:id',authorize, getUser);
userRoute.post('/', (req, res) =>res.send({title:'Create new users'}));
userRoute.put('/:id', (req, res) =>res.send({title:'update users'}));
userRoute.delete('/:id', (req, res) =>res.send({title:'Delete users'}));

export default  userRoute