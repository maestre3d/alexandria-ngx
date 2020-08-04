import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { IVerticalCardProps } from '@alexandria/common/interface/vertical-card.interface';

@Component({
  selector: 'app-list-vertical-card',
  templateUrl: './list-vertical-card.component.html',
  styleUrls: ['./list-vertical-card.component.scss']
})
export class ListVerticalCardComponent implements OnInit, AfterViewInit {
  @Input() props: Array<IVerticalCardProps>;

  private genericSwiper: Swiper;
  @ViewChild('genericSwiper')
  private genericSwiperRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.loadSwiper();
  }

  private loadSwiper(): void {
    this.genericSwiper = new Swiper(this.genericSwiperRef.nativeElement, {
      direction: 'horizontal',
      observer: true,
      slidesPerView: 'auto',
      freeMode: false,
      preloadImages: false,
      watchSlidesVisibility: false,
      spaceBetween: 16,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      mousewheel: {
        forceToAxis: true,
        releaseOnEdges: true,
        invert: true
      }
    });
  }
}
