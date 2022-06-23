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
  sendHospitalName:any;
  selectedCity:any
  ngOnInit(): void {
    this.cityData.cities().subscribe((data => (
      this.cities=data
    )))

  }

  onAdd(){
      const body={
        // 'id' : this.selectedCity, kanka burada sadece Hastane ismi postlayabildim cünkü diğer city department gibi alanlar database
        // tarafında farklı anlamadığın yerde konusalım
        'name' : this.sendHospitalName,
        // 'city_id' : this.selectedCity
      }
      this.sendHospital.postData(body).subscribe((data=>(
       alert('Ekleme işlemi yapıldı')
      )))

    // console.warn(this.hospitalName)
    // console.warn(this.selectedCity)
  }
}


