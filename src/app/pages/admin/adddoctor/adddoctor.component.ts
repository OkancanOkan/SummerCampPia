import { Component, OnInit } from '@angular/core';
import {HospitalDataService} from "../../../services/hospital-data.service";
import {CityDataService} from "../../../services/city-data.service";
import {DepartmentDataService} from "../../../services/department-data.service";
import {DoctorDataService} from "../../../services/doctor-data.service";

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.scss']
})
export class AdddoctorComponent implements OnInit {

  constructor(private hospitalData : HospitalDataService , private cityData:CityDataService, private departmentData:DepartmentDataService ,private sendDoctor :DoctorDataService) { }
  hospitals :any
  cities :any
  departments:any
  selectedDepartmentName :any
  clinicID :any
  doctorFirstName:any
  doctorLastName:any

  ngOnInit(): void {
    this.hospitalData.hospitals().subscribe((data => (
      this.hospitals=data
    )))
    this.cityData.cities().subscribe((data1 => (
        this.cities=data1
    )))
    this.departmentData.departments().subscribe((data2 => (
        this.departments=data2
    )))


  }
  onAddDoctor(){
    const body = {
      'firstName' :this.doctorFirstName,
      'lastName' : this.doctorLastName,

    }
    this.sendDoctor.sendDoctors(body).subscribe((data3 => (
      alert('doctor Ekleme İşlemi Yapıldı')
    )))
  }

}
