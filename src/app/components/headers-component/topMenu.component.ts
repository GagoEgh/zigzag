import { Component } from "@angular/core";


@Component({
    selector:'app-top',
    templateUrl:'./topMenu.component.html',
    styleUrls:['./topMenu.component.css']
})
export class TopMenuComponent{
    isOpen = false
    open(){
        this.isOpen = !this.isOpen
    }
}