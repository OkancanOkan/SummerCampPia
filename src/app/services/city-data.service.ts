import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CityDataService {
  base_url="http://localhost:8080/api/cities"

  constructor(private http:HttpClient) { }
  cities(){
    return this.http.get(this.base_url)

  }
    cities2(){
    return this.http.get(this.base_url)
    }
}
