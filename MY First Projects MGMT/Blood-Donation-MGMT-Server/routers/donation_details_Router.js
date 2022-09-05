import Express from "express";
import { handlerCreateDonation, handlerDonationByAction, handlerGetAllDonation, handlerGetBloodVolume, handlerGetDonationByDonorId, handlerGetDonationByGroup, handlerGetDonationById } from "../handlers/donation_details_Handler.js";

const donationDetailsRouter = Express.Router();

donationDetailsRouter.post('/donationDetails',handlerCreateDonation);

donationDetailsRouter.get('/donationDetails',handlerGetAllDonation);

donationDetailsRouter.get('/donationDetails/bloodGroup/:group',handlerGetDonationByGroup);

donationDetailsRouter.get('/donationDetails/:donationId',handlerGetDonationById);

donationDetailsRouter.get('/donationDetails/actions/:donate',handlerDonationByAction);

donationDetailsRouter.get('/donationDetails/bloodGroup/:group/type/:donate',handlerGetBloodVolume);

donationDetailsRouter.get('/donationDetails/donorsId/:donorId',handlerGetDonationByDonorId);

export default donationDetailsRouter;