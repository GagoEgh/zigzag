import { Component, Input } from "@angular/core";

@Component({
    selector:'app-navbar',
    templateUrl:'./navBar.component.html',
    styleUrls:['./navBar.component.css']
})
export class NavBarComponent{

    @Input('title')
    title!:string
}