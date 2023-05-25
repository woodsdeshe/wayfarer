import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { HomeComponent } from './home/home.component';
import { DisplaycityComponent } from './displaycity/displaycity.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cities', component: CitiesComponent }, 
    { path: 'cities/:id', component: DisplaycityComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }