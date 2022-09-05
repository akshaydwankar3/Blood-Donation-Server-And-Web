import mongoose from "mongoose";

const {Schema, model} = mongoose;

const donationDetailsSchema = new Schema({
    date : {
        type : Date,
        required : true
    },
    blood_volume_ml : {
        type : Number,
        required : true
    },
    type : {
        type : String,
        required : true,
        enum : ['Taken','Donated']
    },
    blood_donation_details : {
        type : Schema.Types.ObjectId,
        ref : 'Donors'
    }
});

const Donation_Details = model('Donation_Details',donationDetailsSchema);

export default Donation_Details;