import Donors from "../modules/donors.js";

export async function createDonors(data){
    let donor = new Donors(data);
    donor = await donor.save();
    return donor;
}

export async function getDonorsById(id){
    const donor = await Donors.findById(id).exec();
    return donor;
}

export async function getDonorByGroup(group){
    const donor = await Donors.find({blood_group : group}).exec();
    // console.log('donorId : ',donor[0].id);
    return donor;
}

export async function getAllDonors(){
    const donor = await Donors.find().exec();
    return donor;
}

export async function getDonorByGroupAndType(group,type){
    const donor = await Donors.find({blood_group : group, type : type}).exec();
    return donor;
}