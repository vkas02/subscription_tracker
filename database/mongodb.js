import mongoose from 'mongoose'
import {DB_URI,NODE_ENV} from "../config/env.js";

if(!DB_URI){
    throw new Error("define MONGODB_URI in .env<dev.prod>.local");
}

const connectToDatabase = async () => {
    try{
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV} mode`);
    }catch(e){
        console.error('Error in connectToDatabase', e);
        process.exit(1);
    }
}

export default connectToDatabase;