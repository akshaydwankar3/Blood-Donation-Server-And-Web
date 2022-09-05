import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  error : boolean = false;

  constructor() { }

  fetchError() : boolean {
    this.error=true;
    return this.error;
  }


}
