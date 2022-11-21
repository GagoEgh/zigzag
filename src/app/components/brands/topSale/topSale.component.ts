import { Component, Input } from "@angular/core";
import { Brand } from "../brand.interface";

@Component({
    selector:'app-topSale',
    templateUrl:'./topSale.component.html',
    styleUrls:['./topSale.component.css']
})
export class TopSaleComponent{

    @Input()
    card!:Brand

    public like(): void {
        this.card.like = !this.card.like;
    }

}