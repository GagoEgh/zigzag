import { Component, Input } from "@angular/core";
import { Brand } from "../brand.interface";

@Component({
    selector: 'app-hotPices',
    templateUrl: './hotPices.component.html',
    styleUrls: ['./hotPices.component.css']
})
export class HotPicesComponent {

    @Input()
    card!: Brand;

    public like(): void {
        this.card.like = !this.card.like;
    }

}