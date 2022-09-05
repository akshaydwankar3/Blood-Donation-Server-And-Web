import Express from "express";
import { handlerCreateDonors, handlerGetAllDonors, handlerGetDonorByGroup, handlerGetDonorsByGroupAndTypes, handlerGetDonorsById } from "../handlers/donorsHandler.js";

const donorsRouter = Express.Router();

donorsRouter.post('/donor',handlerCreateDonors);

donorsRouter.get('/donor/:donorId',handlerGetDonorsById);

donorsRouter.get('/donor/bloodGroup/:group',handlerGetDonorByGroup);

donorsRouter.get('/donor',handlerGetAllDonors);

donorsRouter.get('/donor/bloodGroup/:group/type/:type',handlerGetDonorsByGroupAndTypes);

export default donorsRouter;