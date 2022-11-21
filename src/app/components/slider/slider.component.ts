import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
    @ViewChild("sliderLine", { static: false })
    sliderLine: ElementRef | undefined;
    @ViewChild("img", { static: false })
    img: ElementRef | undefined;
    offset = 0;

    sliderImgs = [
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/b/o/bosch_cooking2022_960x400_am.png",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/9/6/960x400_ipadpro_arm.png",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/9/6/960x400_ipad10gen_arm.png",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/s/a/samsung_neoqled_960x400_am.jpg",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/l/g/lg_tv_promo_960x400_am.jpg",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/h/p/hp_banner_960x400_am.jpg",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/i/p/iphone-14_03.10_960x400_am.jpg",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/9/6/960x400_boschfaem_arm.jpg",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/9/6/960x400_arm_12.png"]

    ngOnInit(): void {
        // 
        // setInterval(() => {
        //     this.next()
        // }, 3000)
    }


    next(): void {
        let imgWidh = this.img?.nativeElement?.clientWidth;
        this.offset += imgWidh;
        let slideElem = this.sliderLine?.nativeElement;
        if (this.offset > (this.sliderImgs.length - 1) * imgWidh) {
            this.offset = 0;
        }
        slideElem.style.left = -this.offset + 'px';
    }

    prev(): void { 
        let imgWidh = this.img?.nativeElement?.clientWidth;
        this.offset -= imgWidh;
        let slideElem = this.sliderLine?.nativeElement;
        if (this.offset < 0) {
            this.offset = (this.sliderImgs.length - 1) * imgWidh;
        }
        slideElem.style.left = -this.offset + 'px';

    }
}