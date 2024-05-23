import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { FotterComponent } from './fotter/fotter.component';
import { ServicesComponent } from './services/services.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { DoctorSectionComponent } from './doctor-section/doctor-section.component';
import { SigninComponent } from './models/signin/signin.component';
import { LoginComponent } from './models/signin/login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SiteComponent,
    FotterComponent,
    ServicesComponent,
    HeroSectionComponent,
    DoctorSectionComponent,
    SigninComponent,
    LoginComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule
  ]
})
export class SiteModule { }
