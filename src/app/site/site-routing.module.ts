import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSectionComponent } from './doctor-section/doctor-section.component';
import { ServicesComponent } from './services/services.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
   {path: "" , component:NavBarComponent},
   {path: "doctors", component: DoctorSectionComponent},
   {path: "services", component: ServicesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class SiteRoutingModule { }
