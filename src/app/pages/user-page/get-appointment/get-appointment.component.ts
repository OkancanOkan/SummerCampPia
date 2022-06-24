import { Component, OnInit } from '@angular/core';
import {CityDataService} from "../../../services/city-data.service";
import {DepartmentDataService} from "../../../services/department-data.service";
import {HospitalDataService} from "../../../services/hospital-data.service";
import {DoctorDataService} from "../../../services/doctor-data.service";

@Component({
  selector: 'app-get-appointment',
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.scss']
})
export class GetAppointmentComponent implements OnInit {

  constructor(private cityData:CityDataService,private getDepartments:DepartmentDataService, private getHospitals:HospitalDataService ,private getDoctors:DoctorDataService) { }
  cityList:any;
  departmentList:any;
  hospitalList:any;
  doctorList:any;



  ngOnInit(): void {
    this.cityData.cities().subscribe((dataAllCities=>(
      this.cityList=dataAllCities
    )))
    this.getDepartments.departments().subscribe((dataAllDepartments=>(
      this.departmentList=dataAllDepartments
    )))
    this.getHospitals.hospitals().subscribe((dataAllHospitals=>(
      this.hospitalList=dataAllHospitals
    )))
    this.getDoctors.doctors().subscribe((dataAllDoctors=> (
        this.doctorList=dataAllDoctors

      ))
    )

  }

}
