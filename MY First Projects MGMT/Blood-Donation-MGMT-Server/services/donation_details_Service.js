import mongogb from 'mongodb';

import Donation_Details from "../modules/donation_details.js"

import Donors from "../modules/donors.js";
import { getDonorByGroupAndType } from "./donorsService.js";

const ObjectId = mongogb.ObjectId; 

export async function createDonationDetails(data){
    let donation = new Donation_Details(data);
    donation = await donation.save();
    return donation;
}

export async function getAllDonationDetails(){
    const donation = await Donation_Details
                                           .find()
                                           .populate('blood_donation_details')
                                           .exec();
    return donation;
}

export async function getDonationDetailsByGroup(group){
   const donation = await Donors.find({blood_group : group}).exec();
   return donation;
}

export async function getBloodVolumeByGroup(group,action){

    const donation = await getAllDonationDetails();

    let sum = 0;
    donation.forEach(d => {
        if(d.type == action && d.blood_donation_details.blood_group == group){
            sum+=d.blood_volume_ml;
        }
    })

    return sum;
}

export async function getDonationById(id){
    const donation = await Donation_Details.findById(id).exec();
    return donation;
}

export async function getDonationByAction(donate){
    const donation = await Donation_Details.find({type : donate}).exec();
    
    return donation;
}

export async function getDonationByDonorId(id){
    const donation = await Donation_Details.find({blood_donation_details : ObjectId(id)}).exec();
    return donation;
}