import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorSectionComponent } from './doctor-section/doctor-section.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
   {path: "doctors", component: DoctorSectionComponent},
   {path: "services", component: ServicesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class SiteRoutingModule { }
