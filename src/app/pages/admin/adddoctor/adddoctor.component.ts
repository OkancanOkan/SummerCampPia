import { Component, OnInit } from '@angular/core';
import {HospitalDataService} from "../../../services/hospital-data.service";

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.scss']
})
export class AdddoctorComponent implements OnInit {

  constructor(private hospitalData : HospitalDataService) { }
 hospitals :any
  ngOnInit(): void {
    this.hospitalData.users().subscribe((data => (
      console.warn(data),
      this.hospitals=data
    )))
  }

}
