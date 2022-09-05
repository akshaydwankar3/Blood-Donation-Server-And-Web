import { createDonationDetails, getAllDonationDetails, getBloodVolumeByGroup, getDonationByAction, getDonationByDonorId, getDonationById, getDonationDetailsByGroup } from "../services/donation_details_Service.js";

export async function handlerCreateDonation(req,res){
    const data = req.body;
    const donation = await createDonationDetails(data);
    if(donation){
        res.status(201).send(donation);
    }else{
        res.sendStatus(404);
    }
}

export async function handlerGetAllDonation(req,res){
    const donation = await getAllDonationDetails();
    if(donation){
        res.status(200).send(donation);
    }else{
        res.sendStatus(404);
    }
}

export async function handlerGetDonationByGroup(req,res){
    const group = req.params.group;
    const donation = await getDonationDetailsByGroup(group);
    if(donation){
        res.status(200).send(donation);
    }else{
        res.sendStatus(404);
    }
}

export async function handlerGetBloodVolume(req,res){
    const {group,donate} = req.params;
    const sum = await getBloodVolumeByGroup(group,donate);
    const bag = [];
    bag.push(sum);
    if(sum > 0){
        res.status(200).send(bag);
    }else{
        res.sendStatus(404);
    }
}

export async function handlerGetDonationById(req,res){
    const id = req.params.donationId;
    const donation = await getDonationById(id);
    console.log(donation);
    if(donation){
        res.status(200).send(donation);
    }else{
        res.sendStatus(404);
    }
}

export async function handlerDonationByAction(req,res){
    const {donate} = req.params;
    const donation = await getDonationByAction(donate);
    if(donation){
        res.status(200).send(donation);
    }else{
        res.sendStatus(404);
    }
}


export async function handlerGetDonationByDonorId(req,res){
    const {donorId} = req.params;
    const donation = await getDonationByDonorId(donorId);
    if(donation){
        res.status(200).send(donation);
    }else{
        res.sendStatus(404);
    }
}