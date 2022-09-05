import cors from 'cors';
// import Express from "express";
import Express from "express";
import mongoose from "mongoose";
import donationDetailsRouter from "./routers/donation_details_Router.js";
import donorsRouter from "./routers/donorsRouter.js";

const port = 8081;
const dbUrl = 'mongodb://localhost:27017/blood-donation-mgmt-db';
const app = Express();

app.use(Express.json());

app.use(cors());

app.use(donorsRouter);

app.use(donationDetailsRouter);

async function initServer(){
    try{
        await mongoose.connect(dbUrl);
        app.listen(port, async () => {
            console.log(`Database is running on DB-URL ${dbUrl}`);
            console.log(`Server and Web are running on port ${port}`);
        });
    }catch(err){
        console.log(err);
        console.log('Unable to connect to the database');
        console.log('unable to start the express server');
    }
}

initServer();