import express from 'express';
import {PORT} from './config/env.js';

import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import subscriptionRoutes from './routes/subscription.routes.js';
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import arcjetMiddleware from "./middlewares/arcjet.middleware.js";
import workflowRoutes from "./routes/workflow.routes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(arcjetMiddleware)

app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/users',userRoutes)
app.use('/api/v1/subscriptions',subscriptionRoutes)
app.use('/api/v1/workflow',workflowRoutes)

app.use(errorMiddleware);

app.get('/',(req,res)=>{
    res.send('Welcome to sub tracker');
});

app.listen(PORT,async()=>{
    console.log(`Sub tracker is listening on port ${PORT}`);
    await connectToDatabase()
});

export default app;