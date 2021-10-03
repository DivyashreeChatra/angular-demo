//import content from other modules
import {NgModule} from "@angular/core"
import {BrowserModule} from "@angular/platform-browser"
import {MenuItemComponent} from "./menu/menuitem/menuItem.components"
import {MenuModule} from "./menu/menu.module"
import {AppRootComponent} from "./approot/approot.component"
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from "@angular/forms"
import {CommonModule} from "@angular/common";
import { AppRoutingModule} from './/app.routing.module'
import { SectionInfoControllerService } from 'src/services/sectionInfoController.service';
@NgModule({
    declarations:[AppRootComponent],
    imports:[BrowserModule,MenuModule,HttpClientModule,FormsModule,CommonModule,AppRoutingModule],
    bootstrap:[AppRootComponent],
    exports:[],
    providers:[
        {provide:SectionInfoControllerService,useClass:SectionInfoControllerService},
        {provide:"SectionInfoAPIUrl",useValue:"http://localhost:5000/api/SectionInfo"}
    ]
})

export class AppModule{

}