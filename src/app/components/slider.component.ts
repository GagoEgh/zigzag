import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})
export class SliderComponent {

    @ViewChild("slide", {static: false})
    slide: ElementRef|undefined;
    sliderImgs = ["https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/b/o/bosch_cooking2022_960x400_am.png",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/9/6/960x400_ipadpro_arm.png",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/9/6/960x400_ipad10gen_arm.png",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/s/a/samsung_neoqled_960x400_am.jpg",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/l/g/lg_tv_promo_960x400_am.jpg",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/h/p/hp_banner_960x400_am.jpg",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/i/p/iphone-14_03.10_960x400_am.jpg",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/9/6/960x400_boschfaem_arm.jpg",
        "https://www.zigzag.am/media/mageplaza/bannerslider/banner/image/9/6/960x400_arm_12.png"]

    offset = 0;

    next(){
    
        this.offset+=500;
        let c = this.slide?.nativeElement;
        if(this.offset>(this.sliderImgs.length-1)*500){
            this.offset=0;
        }
        c.style.left = -this.offset+'px';

    }

    prev(){
        this.offset-=500;
        let c = this.slide?.nativeElement;
        if(this.offset<0){
            this.offset=(this.sliderImgs.length-1)*500;
        }
        c.style.left = -this.offset+'px';

    }
}