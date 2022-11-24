import { Component, Input, OnInit } from "@angular/core";
import { Menu } from "../menu.interface";

@Component({
    selector: 'app-navbar',
    templateUrl: './navBar.component.html',
    styleUrls: ['./navBar.component.css']
})
export class NavBarComponent  {

     @Input('menu')
     menu!:Menu;


}