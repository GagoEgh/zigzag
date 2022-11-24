import { Component, Input } from "@angular/core";
import { SubMenu } from "../menu.interface";


@Component({
    selector:'app-subMenu',
    templateUrl:'./subMenu.component.html',
    styleUrls:['./subMenu.component.css']
})
export class SubMenuComponent{

    @Input("subMenu")
    subMenu!:SubMenu

}


