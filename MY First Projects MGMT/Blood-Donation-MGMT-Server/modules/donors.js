// import Express from "express";
import mongoose from "mongoose";

const {Schema, model} = mongoose;

const addressSchema = new Schema({
    country : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    pincode : {
        type : Number,
        required : true
    }
});

const donorsSchema = new Schema({
    type : {
        type : String,
        required : true,
        enum : ['Donor','Patient']
    },
    name : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true,
        enum : ['m','f']
    },
    age : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : false
    },
    contacts : {
        type : Array,
        required : true
    },
    address : addressSchema,
    blood_group : {
        type : String,
        required : true,
        enum : ['A+','A-','B+','B-','O+','O-','AB+','AB-']
    }
});

const Donors = model('Donors',donorsSchema);

export default Donors;