import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HospitalDataService {
  _url="http://localhost:8080/api/hospitals"

  constructor(private http:HttpClient) { }
  hospitals(){
    return this.http.get(this._url)

  }
}
