import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-product',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']

})
export class ProductsComponent {


    @ViewChild("slider", { static: false })
    slider: ElementRef | undefined;
    @ViewChild("card", { static: false })
    card!: ElementRef;

    offset=0;

    public productBanner: string[] = [
        'https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/b/o/bosch-mum_237x316_am.png',
        'https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/d/u/duamondi_246x316_am.jpg',
        'https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/h/a/haier_494x316_am.jpg'
    ]

    public brands: string[] = [
        'https://www.zigzag.am/media/mgs_brand/5/m/5marshall.jpg',
        'https://www.zigzag.am/media/mgs_brand/8/p/8panasonic.jpg',
        'https://www.zigzag.am/media/mgs_brand/3/m/3miele.jpg',
        'https://www.zigzag.am/media/mgs_brand/4/k/4kidchenaid.jpg',
        'https://www.zigzag.am/media/mgs_brand/1/0/10urbanears.jpg',
        'https://www.zigzag.am/media/mgs_brand/1/b/1bosch.jpg',
        'https://www.zigzag.am/media/mgs_brand/1/3/13sony.jpg',
        'https://www.zigzag.am/media/mgs_brand/1/1/11indesit.jpg',
        'https://www.zigzag.am/media/mgs_brand/1/4/14samsung.jpg',
        'https://www.zigzag.am/media/mgs_brand/6/k/6k-array.jpg',
        'https://www.zigzag.am/media/mgs_brand/7/p/7philips.jpg',
        'https://www.zigzag.am/media/mgs_brand/2/a/2apple.jpg',
        'https://www.zigzag.am/media/mgs_brand/9/l/9liebherr.jpg'
    ];

    public prev(): void {
        let cardWidh = this.card?.nativeElement?.clientWidth;
        this.offset -= cardWidh;
        let slideElem = this.slider?.nativeElement;
        if (this.offset < 0) {
            this.offset = 0;
        }
        slideElem.style.left = -this.offset + 'px';

    }


    public next(): void {
        let cardWidh = this.card?.nativeElement?.clientWidth;
        this.offset += cardWidh;
        let slideElem = this.slider?.nativeElement;
        let qount = this.brands.length - 7;
        if (this.offset > qount * cardWidh) {
            this.offset = 0;
        }
        slideElem.style.left = -this.offset + 'px';

    }
}