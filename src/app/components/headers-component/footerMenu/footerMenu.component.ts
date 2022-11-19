import { Component } from "@angular/core";

@Component({
    selector: 'app-footMenu',
    templateUrl: './footerMenu.component.html',
    styleUrls: ['./footerMenu.component.css']
})
export class FooterMenuComponent {
    navBar = ['ԿԱՏԱԼՈԳ', 'Հեռուստացույցներ, աուդիո և վիդեոտեխնիկա',
        'Համակարգիչներ, նոթբուքներ, պլանշետներ', 'Հեռախոսներ և կապի միջոցներ',
        'Կենցաղային տեխնիկա', 'Խոհանոցային տեխնիկա', 'Կլիմատիկ տեխնիկա'];
        
    brandImgs = ['https://www.zigzag.am/pub/media/categories/miele.svg',
        'https://www.zigzag.am/pub/media/categories/bosch.svg',
        'https://www.zigzag.am/pub/media/categories/k-array.svg']

}