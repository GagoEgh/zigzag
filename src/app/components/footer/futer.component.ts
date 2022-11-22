import { Component } from "@angular/core";
import { FooterCard } from "./footerCard.interface";


@Component({
    selector: 'app-futer',
    templateUrl: './futer.component.html',
    styleUrls: ['./futer.component.css']
})
export class FuterComponent {

    public footerCards: FooterCard[] = [

        {
            name: 'Վաճառասրահներ',
            img: 'https://www.zigzag.am/pub/media/footer_imgs/stores-url.svg'
        },
        {
            name: 'Ծառայություններ',
            img: 'https://www.zigzag.am/pub/media/footer_imgs/services.svg'
        },
        {
            name: 'Ակցիաներ',
            img: 'https://www.zigzag.am/pub/media/footer_imgs/promo-html.svg'
        },
        {
            name: 'Նվեր-քարտ',
            img: 'https://www.zigzag.am/pub/media/footer_imgs/gift-card-url.svg'
        },
        {
            name: 'Ապառիկ',
            img: 'https://www.zigzag.am/pub/media/footer_imgs/creditf.svg'
        },
        {
            name: 'FAQ',
            img: 'https://www.zigzag.am/pub/media/footer_imgs/faq.svg'
        },
        {
            name: 'Հետադարձ կապ',
            img: 'https://www.zigzag.am/pub/media/footer_imgs/contacts.svg'
        },
        {
            name: 'Այլ',
            img: 'https://www.zigzag.am/pub/media/footer_imgs/financial.svg'
        }
    ];
    public icons: string[] = [
        'assets/imgs/facebook.png',
        'assets/imgs/youtube.png',
        'assets/imgs/instagram.png',
        'assets/imgs/linkedin.png',
    ];
    public puyCards: string[] = [
        "https://www.zigzag.am/static/version1666962451/frontend/Magento/zigzag/hy_AM/images/svg/visa.svg",
        "https://www.zigzag.am/static/version1666962451/frontend/Magento/zigzag/hy_AM/images/svg/mastercard.svg",
        'https://www.zigzag.am/static/version1666962451/frontend/Magento/zigzag/hy_AM/images/svg/maestro.svg',
        'https://www.zigzag.am/static/version1666962451/frontend/Magento/zigzag/hy_AM/images/svg/arca.svg',
        'https://www.zigzag.am/static/version1666962451/frontend/Magento/zigzag/hy_AM/images/svg/idram.svg'
    ]
}