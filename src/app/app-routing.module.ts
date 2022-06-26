import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./pages/admin/admin.component";
import {DoctorComponent} from "./pages/doctor/doctor.component";
import {UserPageComponent} from "./pages/user-page/user-page.component";


const routes: Routes = [
  {
    path:"",
    component:UserPageComponent
  },
  {
    path: "admin",
    component:AdminComponent
  },
  {
    path:"doctor",
    component:DoctorComponent
  },
  {
    path:"user",
    component:UserPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
