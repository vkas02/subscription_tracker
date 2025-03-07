import mongoose from 'mongoose';


const SubscriptionSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: 5,
        maxLength: 100
    },
    price:{
        type: Number,
        required: [true, 'Price is required'],
        min:[0,'price must be greater than 0'],
    },
    currency:{
        type: String,
        enum: ['USD','INR','EUR'],
        default: 'USD'
    },
    frequency:{
        type: String,
        enum: ['daily','weekly','monthly','yearly'],
    },
    category:{
        type: String,
        enum: ['sports','news','lifestyle','tech','finance'],
        required:true
    },
    paymentMethod:{
        type: String,
        required: [true, 'Payment methods are required'],
        trim: true,
    },
    status:{
        type: String,
        enum: ['active','expired','canceled'],
        default: 'active'
    },
    startDate:{
        type: Date,
        required: [true, 'Start date is required'],
        validate:{
            validator: (value)=>value<= new Date(),
            message: 'Start date must be in past'
        }
    },
    renewalDate:{
        type: Date,
        validate:{
            validator: function (value){
                return value>this.startDate;
            },
            message: 'Renewal date must be after start Date'
        }
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
        index: true,
    }
},{timestamp:true})

SubscriptionSchema.pre('save', function (next) {
    if(!this.renewalDate){
        const renewalPeriods={
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365,
        }
        this.renewalDate=new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency]);
    }
    if(this.renewalDate<new Date()){
        this.status='expired'
    }
    next();
})

const Subscription=mongoose.model('Subscription',SubscriptionSchema);

export default Subscription;