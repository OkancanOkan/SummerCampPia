import { Component, OnInit } from '@angular/core';
import {CityDataService} from "../../../services/city-data.service";
import {HospitalDataService} from "../../../services/hospital-data.service";

@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.scss']

})
export class AddhospitalComponent implements OnInit {

  constructor(private cityData: CityDataService, private sendHospital: HospitalDataService) {
  }

  cityList: any;
  sendHospitalName: any;
  selectedCityId: any;

  ngOnInit(): void {
    this.cityData.cities().subscribe((data => (
      this.cityList = data
    )))
  }

  onAdd() {
    const body = {
      'name': this.sendHospitalName,
      // 'city': {
      //   'id': this.selectedCityId
      // }
    }
    this.sendHospital.postData(body).subscribe((data2 => (
      alert('Hastane Ekleme İşlemi Yapıldı')
    )))
    // console.warn(this.hospitalName)
    // console.warn(this.selectedCity)
  }
}

