import { Component, Input } from "@angular/core";

@Component({
    selector:'app-card',
    templateUrl:'./productCard.component.html',
    styleUrls:['./productCard.component.css']
})
export class ProductCardComponent{

    @Input()
    card!:string;
    
}