import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { gsap } from "gsap";


@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    AboutComponent,
    ContactComponent
  ]
})
export class SharedModule { }
