import { createDonors, getAllDonors, getDonorByGroup, getDonorByGroupAndType, getDonorsById } from "../services/donorsService.js";

export async function handlerCreateDonors(req,res){
    const data = req.body;
    const donor = await createDonors(data);
    if(donor){
        res.status(201).send(donor);
    }else{
        res.sendStatus(404);
    }
}

export async function handlerGetDonorsById(req,res){
    const id = req.params.donorId;
    const donor = await getDonorsById(id);
    if(donor){
        res.status(200).send(donor);
    }else{
        res.sendStatus(404);
    }
}

export async function handlerGetDonorByGroup(req,res){
    const group = req.params.group;
    const donor = await getDonorByGroup(group);
    if(donor){
        res.status(200).send(donor);
    }else{
        res.sendStatus(404);
    }
}

export async function handlerGetAllDonors(req,res){
    const donor = await getAllDonors();
    if(donor){
        res.status(201).send(donor);
    }else{
        res.sendStatus(404);
    }
}

export async function handlerGetDonorsByGroupAndTypes(req,res){
    const {group,type} = req.params;
    const donors = await getDonorByGroupAndType(group,type);
    if(donors){
        res.status(201).send(donors);
    }else{
        res.sendStatus(404);
    }
}