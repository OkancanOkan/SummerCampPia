import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CityDataService {
  _url="http://localhost:8080/api/cities"

  constructor(private http:HttpClient) { }
  cities(){
    return this.http.get(this._url)

  }
}
