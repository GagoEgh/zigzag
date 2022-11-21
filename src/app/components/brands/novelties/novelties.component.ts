import { Component, Input } from "@angular/core";
import { Brand } from "../brand.interface";

@Component({
    selector: 'app-novelties',
    templateUrl: './novelties.component.html',
    styleUrls: ['./novelties.component.css']
})
export class NoveltiesComponent {

    @Input('card')
    card!: Brand;


    public like(): void {
        this.card.like = !this.card.like;
    }
}