import { Component, OnInit } from '@angular/core';
import {HospitalDataService} from "../../../services/hospital-data.service";
import {CityDataService} from "../../../services/city-data.service";
import {DepartmentDataService} from "../../../services/department-data.service";

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.scss']
})
export class AdddoctorComponent implements OnInit {

  constructor(private hospitalData : HospitalDataService , private cityData:CityDataService, private departmentData:DepartmentDataService ) { }
  hospitals :any
  cities :any
  departments:any
  ngOnInit(): void {
    this.hospitalData.hospitals().subscribe((data => (
      console.warn(data),
      this.hospitals=data
    )))
    this.cityData.cities().subscribe((data1 => (
      console.warn(data1),
        this.cities=data1
    )))
    this.departmentData.departments().subscribe((data2 => (
      console.warn(data2),
        this.departments=data2
    )))
  }

}
