import { Component, Input } from "@angular/core";
import { FooterCard } from "../footerCard.interface";

@Component({
    selector:'app-footerMenu',
    templateUrl:'./footerMenu.component.html',
    styleUrls:['./footerMenu.component.css']
})
export class FuterMenuComponent{

    @Input()
    card!:FooterCard
    
}