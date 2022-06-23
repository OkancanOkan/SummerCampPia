import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HospitalDataService {
  _url="http://localhost:8080/api/hospital"

  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this._url)

  }
}
