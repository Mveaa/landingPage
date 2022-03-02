import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarouselComponent } from './pages/home/components/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { CompanyComponent } from './pages/company/company.component';
import { OfferComponent } from './pages/offer/offer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddClassOnScrollModule } from './directives/add-class-on-scroll/add-class-on-scroll.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddClassOnScrollModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
    CompanyComponent,
    OfferComponent,
    GalleryComponent,
    ContactComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
