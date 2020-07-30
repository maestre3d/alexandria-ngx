import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IHorizontalItemProps } from '../../interface/horizontal-item.interface';
import Swiper from 'swiper';

@Component({
  selector: 'app-list-horizontal-item',
  templateUrl: './list-horizontal-item.component.html',
  styleUrls: ['./list-horizontal-item.component.scss']
})
export class ListHorizontalItemComponent implements OnInit, AfterViewInit {
  @Input() props: Array<IHorizontalItemProps>;
  // UI
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
      slidesPerView: 1,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 24,
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          slidesPerColumnFill: 'row',
        }
      }
    });
  }

}
