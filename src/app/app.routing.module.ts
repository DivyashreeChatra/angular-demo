import {NgModule} from "@angular/core"
import {RouterModule,Routes} from "@angular/router"
import { CreatemenuComponent } from '../app/menu/createmenu/createmenu.component'
import { MenuListComponent} from '../app/menu/menulist/menuList.component'


const Routes :Routes = [
    { path: 'create', component: CreatemenuComponent},
    { path: 'list', component: MenuListComponent},
   // {path: '', redirectTo: '/create', pathMatch: 'full'}
];

@NgModule({
    imports :[
        RouterModule.forRoot(Routes),
    
    ],
    exports:[ RouterModule]
})

export class AppRoutingModule{}
    
