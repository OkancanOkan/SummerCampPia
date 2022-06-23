import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HospitalDataService {
  base_url="http://localhost:8080/api/"

  constructor(private http:HttpClient) { }
  hospitals(){
    return this.http.get(this.base_url+'hospitals')
  }
  postData(body:any){
      return this.http.post(this.base_url + 'hospital', body)

  }
}
