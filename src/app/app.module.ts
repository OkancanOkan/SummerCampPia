import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdddoctorComponent } from './pages/admin/adddoctor/adddoctor.component';
import { AddhospitalComponent } from './pages/admin/addhospital/addhospital.component';
import { AppointmentHoursComponent } from './pages/doctor/appointment-hours/appointment-hours.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DoctorComponent,
    AdminComponent,
    UserPageComponent,
    AdddoctorComponent,
    AddhospitalComponent,
    AppointmentHoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
