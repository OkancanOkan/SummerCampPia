import { Component, OnInit } from '@angular/core';
import {CityDataService} from "../../../services/city-data.service";

@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.scss']
})
export class AddhospitalComponent implements OnInit {

  constructor(private cityData:CityDataService) { }
  cities:any;

  ngOnInit(): void {
    this.cityData.cities().subscribe((data => (
      this.cities=data
    )))
  }

}

