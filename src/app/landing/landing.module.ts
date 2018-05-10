import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LandingRoutingModule } from './router/landing-routing.module';
import { LandingComponent } from './landing.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  declarations: [HeaderComponent, LandingComponent, GalleryComponent, QuotationComponent, MainComponent]
})
export class LandingModule { }
