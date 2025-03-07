import Subscription from "../models/subscription.model.js";
import {workflowClient} from "../config/upstash.js";
import {SERVER_URL} from "../config/env.js";

export const createSubscription = async (req, res,next) => {
    try{
        const subscription=await Subscription.create({
            ...req.body,
            user: req.user._id,
        })

        await workflowClient.trigger({
            url:`${SERVER_URL}/api/v1/workflow/subscription/reminder`,
            body:{
                subscriptionId:subscription.id,
            },
            header:{
                'content-type':'application/json',
            },
            retries:0,
        })

        res.status(201).json({
            success:true,
            data:subscription,
        })

    }catch (err){
        next(err);
    }
}

export const getUserSubscriptions=async (req,res,next)=>{
    try{
        if(req.user._id!= req.params.id){
            const error=new Error('Not the owner of account');
            error.statusCode=401;
            throw error;
        }
        const subscriptions=await Subscription.find({user:req.params.id})
        res.status(200).json({
            success:true,
            data:subscriptions,
        })
    }catch (error){
        next(error);
    }
}