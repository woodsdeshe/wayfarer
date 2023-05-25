import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CitiesComponent } from './cities.component';
import { DisplaycityComponent } from '../displaycity/displaycity.component';

const cityRoutes: Routes = [
    {
        path: 'cities', 
        component: CitiesComponent, 
        children: [
            {path: 'cities/:id',
            component: DisplaycityComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(cityRoutes)],
    exports: [RouterModule]
})
export class CityRoutesModule {}