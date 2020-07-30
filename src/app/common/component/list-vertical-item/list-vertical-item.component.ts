import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import Swiper from 'swiper';
import { IVerticalItemProps } from '../../interface/vertical-item.interface';

@Component({
  selector: 'app-list-vertical-item',
  templateUrl: './list-vertical-item.component.html',
  styleUrls: ['./list-vertical-item.component.scss']
})
export class ListVerticalItemComponent implements OnInit, AfterViewInit {
  @Input() props: Array<IVerticalItemProps>;

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
      observer: true,
      slidesPerView: 'auto',
      freeMode: true,
      preloadImages: false,
      watchSlidesVisibility: false,
      spaceBetween: 32,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
        elementClass: 'swiper-lazy',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      }
    });
  }

}
