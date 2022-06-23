import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartmentDataService {

  _hospital_id='2'
  _url="http://localhost:8080/api/clinics"

  constructor(private http:HttpClient) { }
  departments(){
    return this.http.get(this._url)

  }
}
