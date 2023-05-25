import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomepageImgComponent } from './homepage-img/homepage-img.component';
import { HomepageInfoComponent } from './homepage-info/homepage-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageImgComponent,
    HomepageInfoComponent, HomeComponent, CitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
