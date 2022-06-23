import { Component, OnInit } from '@angular/core';
import {CityDataService} from "../../../services/city-data.service";
import {HospitalDataService} from "../../../services/hospital-data.service";

@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.scss']
})
export class AddhospitalComponent implements OnInit {

  constructor(private cityData:CityDataService,private sendHospital:HospitalDataService) { }
  cities:any;
  hospitalName:any;
  selectedCity:any
  ngOnInit(): void {
    this.cityData.cities().subscribe((data => (
      this.cities=data
    )))

  }

  onAdd(){
      const body={
        // 'id' : this.selectedCity,
        'name' : this.hospitalName,
        // 'city_id' : this.selectedCity
      }
      this.sendHospital.postData(body).subscribe((data=>(
       alert('Ekleme işlemi yapıldı')
      )))

    // console.warn(this.hospitalName)
    // console.warn(this.selectedCity)
  }
}


