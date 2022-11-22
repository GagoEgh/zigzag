import { Component, ElementRef, ViewChild } from "@angular/core";
import { Brand } from "./brand.interface";

@Component({
    selector: 'app-brands',
    templateUrl: './brands.component.html',
    styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
    @ViewChild("picesSlider", { static: false })
    picesSlider: ElementRef | undefined;
    @ViewChild("picesCard", { static: false })
    picesCard!: ElementRef;
   
    @ViewChild("noveltiesSlider", { static: false })
    noveltiesSlider: ElementRef | undefined;
    @ViewChild("noveltiesCard", { static: false })
    noveltiesCard!: ElementRef;
   
    @ViewChild("topSaleSlider", { static: false })
    topSaleSlider: ElementRef | undefined;
    @ViewChild("topSaleCard", { static: false })
    topSaleCard!: ElementRef;
   
    hotPicesOffset = 0;
    noveltiesOffset = 0;
    topSaleOffset = 0;
    
    noveltiesBrands: Brand[] = [
        {
            hotPices: false,
            topSellers: false,
            novelties: true,
            like: false,
            name: 'Ակուստիկա և բարձրախոսներ',
            model: 'Canyon CNE-CBTSP4BL/4Watt Bluetooth Speaker Blue',
            price: 9500,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/1/7/1750191.jpg'
        },
        {
            hotPices: false,
            topSellers: false,
            novelties: true,
            like: false,
            name: 'Ծխնելուզային օդաքարշ պահարաններ',
            model: 'Bosch DWK65AJ90R',
            price: 142310,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/8/4/8400621_5.jpg'
        },
        {
            hotPices: false,
            topSellers: false,
            novelties: true,
            like: true,
            name: 'Հեռուստացույցներ',
            model: 'UD 24W2510',
            price: 95900,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/0/1/019970.jpg'
        },
        {
            hotPices: false,
            topSellers: false,
            novelties: true,
            like: false,
            name: 'Հեռուստացույցներ',
            model: 'LED հեռուստացույցներ',
            price: 143000,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/0/1/019950.jpg'
        },
        {
            hotPices: false,
            topSellers: false,
            novelties: true,
            like: false,
            name: 'Ավտոմատ սրճեփ մեքենաներ',
            model: 'Krups EA895N10 ',
            price: 540000,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/6/0/600463.jpg'
        },

    ]

    hotPicesBrands: Brand[] = [
        {
            hotPices: true,
            topSellers: false,
            novelties: false,
            like: false,
            name: 'Ականջակալներ',
            model: 'Beats EP On-Ear Headphone Red/ML9C2ZM/A',
            price: 49500,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/2/9/297532.jpg'
        },
        {
            hotPices: true,
            topSellers: false,
            novelties: false,
            like: false,
            name: 'Մերսող սարքեր',
            model: 'Beper 40.500 Anti-cellulite massager',
            price: 13860,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/8/7/877300.jpg'
        },
        {
            hotPices: true,
            topSellers: false,
            novelties: false,
            like: false,
            name: 'Սառնարաններ',
            model: 'Bosch KGN36XI30U',
            price: 368500,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/5/3/5301768.jpg'
        },
        {
            hotPices: true,
            topSellers: false,
            novelties: false,
            like: false,
            name: 'Պայուսակներ',
            model: 'Hama "Perth" 15.6 Backpack Dark blue (185693)',
            price: 18540,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/4318571.jpg'
        },
        {
            hotPices: true,
            topSellers: false,
            novelties: false,
            like: false,
            name: 'Մկնիկներ',
            model: 'Canyon CND-SGM6N Black Mouse',
            price: 7490,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/4360195.jpg'
        },
        {
            hotPices: true,
            topSellers: false,
            novelties: false,
            like: false,
            name: 'Բարձրախոսներ',
            model: 'Hama "Drum 2.0"Loudspeaker,3.5W,Light Blue(188213)',
            price: 7870,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/1/7/173651-2.jpg'
        },
    ]

    topSaleBrands: Brand[] = [
        {
            hotPices: false,
            topSellers: true,
            novelties: false,
            like: false,
            name: 'Խոհանոցային տեխնիկա',
            model: 'Bosch KGV39XL21R',
            price: 297000,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/5/3/5301617.jpg'
        },
        {
            hotPices: true,
            topSellers: false,
            novelties: false,
            like: false,
            name: 'Ականջակալներ',
            model: 'Beats EP On-Ear Headphone Red/ML9C2ZM/A',
            price: 49500,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/2/9/297532.jpg'
        },
        {
            hotPices: false,
            topSellers: true,
            novelties: false,
            like: false,
            name: 'Կոտորակիչներ',
            model: 'Bosch MMB42G0B',
            price: 48400,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/6/7/670142_7.jpg'
        },
        {
            hotPices: false,
            topSellers: true,
            novelties: false,
            like: false,
            name: 'Համակցված ներկառուցվող գազօջախներ',
            model: 'Bosch PRY6A6B70Q',
            price: 300980,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/5/2/5203317_1.jpg'
        },
        {
            hotPices: false,
            topSellers: true,
            novelties: false,
            like: false,
            name: 'Խոհանոցային մանր տեխնիկա',
            model: 'Panasonic SD-B2510WTS',
            price: 65020,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/6/8/6861300.jpg'
        },
        {
            hotPices: false,
            topSellers: true,
            novelties: false,
            like: false,
            name: 'Պայուսակներ',
            model: 'Hama "Toronto" Notebook Bag 15.6" Olive (101854)',
            price: 11900,
            img: 'https://www.zigzag.am/media/catalog/product/cache/bdbe8598426ada35232bf9926a93af44/4/3/4318002_2.jpg'
        },
    ]

    public topSalePrev(): void {
        if (this.topSaleBrands.length === 4) { return }
        let cardWidh = this.topSaleCard?.nativeElement?.clientWidth;
        this.topSaleOffset -= cardWidh;
        let slideElem = this.topSaleSlider?.nativeElement;
        if (this.topSaleOffset < 0) {
            this.topSaleOffset = 0;
        }
        slideElem.style.left = -this.topSaleOffset + 'px';

    }


    public topSaleNext(): void {
        if (this.topSaleBrands.length === 4) { return }

        let cardWidh = this.topSaleCard?.nativeElement?.clientWidth;
        this.topSaleOffset+= cardWidh;
        let slideElem = this.topSaleSlider?.nativeElement;
        let qount = this.topSaleBrands.length - 4;
        if (this.topSaleOffset > qount * cardWidh) {
            this.topSaleOffset= 0;
        }
        slideElem.style.left = -this.topSaleOffset + 'px';

    }


    public hotPicesPrev(): void {
        if (this.hotPicesBrands.length === 4) { return }
        let cardWidh = this.picesCard?.nativeElement?.clientWidth;
        this.hotPicesOffset -= cardWidh;
        let slideElem = this.picesSlider?.nativeElement;
        if (this.hotPicesOffset < 0) {
            this.hotPicesOffset = 0;
        }
        slideElem.style.left = -this.hotPicesOffset + 'px';

    }


    public hotPicesNext(): void {
        if (this.hotPicesBrands.length === 4) { return }

        let cardWidh = this.picesCard?.nativeElement?.clientWidth;
        this.hotPicesOffset += cardWidh;
        let slideElem = this.picesSlider?.nativeElement;
        let qount = this.hotPicesBrands.length - 4;
        if (this.hotPicesOffset > qount * cardWidh) {
            this.hotPicesOffset = 0;
        }
        slideElem.style.left = -this.hotPicesOffset + 'px';

    }


    public noveltiesPrev(): void {
        if (this.noveltiesBrands.length === 4) { return }
        let cardWidh = this.noveltiesCard?.nativeElement?.clientWidth;
        this.noveltiesOffset -= cardWidh;
        let slideElem = this.noveltiesSlider?.nativeElement;
        if (this.noveltiesOffset < 0) {
            this.noveltiesOffset = 0;
        }

        slideElem.style.left = -this.noveltiesOffset + 'px';

    }


    public noveltiesNext(): void {
        if (this.noveltiesBrands.length === 4) { return }
        let cardWidh = this.noveltiesCard?.nativeElement?.clientWidth;
        this.noveltiesOffset += cardWidh;
        let slideElem = this.noveltiesSlider?.nativeElement;
        let qount = this.noveltiesBrands.length - 4;
        console.log()
        if (this.noveltiesOffset > qount * cardWidh) {
            this.noveltiesOffset = 0;
        }
        slideElem.style.left = -this.noveltiesOffset + 'px';
    }
}