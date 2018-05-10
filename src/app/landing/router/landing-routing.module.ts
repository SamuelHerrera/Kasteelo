import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { QuotationComponent } from '../components/quotation/quotation.component';
import { MainComponent } from '../components/main/main.component';
import { EventsComponent } from '../components/events/events.component';
import { ContactComponent } from '../components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'quotation', component: QuotationComponent },
      { path: 'events', component: EventsComponent },
      { path: 'contact', component: ContactComponent }
    ]
  },
  { path: '**', redirectTo: '', }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
