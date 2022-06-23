import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepartmentDataService {


  _url="http://172.16.88.63:8080/api/clinics/2"


  constructor(private http:HttpClient) { }
  departments(){
    return this.http.get(this._url)

  }
}
