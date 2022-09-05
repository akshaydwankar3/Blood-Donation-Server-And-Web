import { Donors } from "./donors"

export type Donation = {
    _id : string,
    date : Date,
    blood_volume_ml : number,
    type : string,
    blood_donation_details : Donors
}