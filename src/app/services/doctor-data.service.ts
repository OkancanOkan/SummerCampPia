import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DoctorDataService {
  base_url ="http://localhost:8080/doctors"

  constructor(private http:HttpClient) { }

  doctors(){
  return this.http.get(this.base_url)
  }
}
