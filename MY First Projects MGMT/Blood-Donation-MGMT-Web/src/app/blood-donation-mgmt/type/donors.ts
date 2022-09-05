export type Address = {
    country : string,
    state : string,
    city : string,
    pincode : number
}

export type Donors = {
    _id : string,
    type : string,
    name : string,
    gender : string,
    age : number,
    contacts : number[],
    email : string,
    address : Address,
    blood_group : string
}