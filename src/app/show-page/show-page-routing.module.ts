import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowPageComponent } from './show-page.component';

const routes: Routes = [
  { path: 'cities/:id/posts/:postId', component: ShowPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
