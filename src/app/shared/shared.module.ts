import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    TranslateModule
  ]
})
export class SharedModule { }
