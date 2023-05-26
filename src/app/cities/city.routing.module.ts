import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CitiesComponent } from './cities.component';
import { DisplaycityComponent } from '../displaycity/displaycity.component';
import { ShowPageComponent } from '../show-page/show-page.component';
import { PostsComponent } from '../posts/posts.component';
import { HomepageInfoComponent } from '../homepage-info/homepage-info.component';

const cityRoutes: Routes = [
    {
        path: 'cities', 
        component: CitiesComponent, 
        children: [
            {path: ':id',
            component: DisplaycityComponent
            },
            {path: ':id/posts/:postId', 
            component: ShowPageComponent}
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(cityRoutes)],
    exports: [RouterModule]
})
export class CityRoutesModule {}