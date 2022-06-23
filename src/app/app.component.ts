import {Component, Input, OnInit} from '@angular/core';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {HospitalDataService} from "./services/hospital-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title=""
  users:any;
  constructor(private hospitalData:HospitalDataService) {
    this.hospitalData.users().subscribe((data)=>(
       this.users=data
      )
    )
  }
}
