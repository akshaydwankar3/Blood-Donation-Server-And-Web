import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorService } from '../error.service';
import { Donation } from './type/donations';
import { Address, Donors } from './type/donors';

const url1 = 'http://localhost:8081/donor';
const url2 = 'http://localhost:8081/donationDetails';

@Injectable({
  providedIn: 'root'
})
export class BloodDonationService {

  error : boolean = false;

  constructor(private http : HttpClient, private errorService : ErrorService) { }

  private HandlerError(err : HttpErrorResponse, caught : any){
    this.error = this.errorService.fetchError();
    return throwError(()=>{      
      console.log('error : ',err);
      new Error(err.message);
    });
  }

  getAllDonorsDetails() : Observable<Donors[]> {
    return this.http.get<Donors[]>(url1).pipe(catchError(this.HandlerError));
  }

  getAllDonationDetails() : Observable<Donation[]> {
    return this.http.get<Donation[]>(url2).pipe(catchError(this.HandlerError));
  }

  getDonationDetailsById(donationId : string) : Observable<Donation>{
    return this.http.get<Donation>(`${url2}/${donationId}`).pipe(catchError(this.HandlerError));
  }

  getDonorsById(donorId : string) : Observable<Donors> {
    return this.http.get<Donors>(`${url1}/${donorId}`).pipe(catchError(this.HandlerError));
  }

  createNewDonationDetails(date : string, blood_volume_ml : number, type : string,blood_donation_details : Object){
    return this.http.post<Donation>(url2,{
      date,
      blood_volume_ml,
      type,
      blood_donation_details
    },{
      headers : {
        'content-Type' : 'application/json'
      }
    }).pipe(
      catchError(this.HandlerError)
    );
  }

  getDonorsByGroup(group : string) : Observable<Donors[]> {
    return this.http.get<Donors[]>(`${url2}/bloodGroup/${group}`).pipe(catchError(this.HandlerError));
  }

  getBloodVolume(group : string, donate : string) : Observable<Donation[]> {
    return this.http.get<Donation[]>(`${url2}/bloodGroup/${group}/type/${donate}`).pipe(catchError(this.HandlerError));
  }

  getDonorByGroupAndType(group : string, type : string) : Observable<Donors[]> {
    return this.http.get<Donors[]>(`${url1}/bloodGroup/${group}/type/${type}`).pipe(catchError(this.HandlerError));
  }

  createNewDonors(type : string, name : string, gender : string, age : number, contacts : number, email : string, address : Address, blood_group : string){
    return this.http.post<Donors>(url1,{
      type,
      name,
      gender,
      age,
      contacts,
      email,
      address,
      blood_group
    },{
      headers :{
        'content-Type' : 'application/json'
      }
    }).pipe(
      catchError(this.HandlerError)
    );
  }

}
