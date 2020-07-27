import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import Swiper from 'swiper';

import { ThemeService } from '@alexandria/service/theme/theme.service';
import { AdsService } from '@alexandria/service/ads/ads.service';
import { HistoryService } from '@alexandria/service/history/history.service';
import { IHistoryItem } from '@alexandria/domain/entity/history.entity';
import { NotificationsService } from '@alexandria/service/notifications/notifications.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, AfterViewInit, OnDestroy {
  // Observers
  private subject: Subject<void> = new Subject();

  // Data
  public history$: Observable<Array<IHistoryItem>>;

  // UI
  private adSwiper: Swiper;
  @ViewChild('adSwiper')
  private adSwiperRef: ElementRef;

  private recentSwiper: Swiper;
  @ViewChild('recentSwiper')
  private recentSwiperRef: ElementRef;

  private newsSwiper: Swiper;
  @ViewChild('newsSwiper')
  private newsSwiperRef: ElementRef;

  constructor(private themeService: ThemeService, private metaService: Meta, private titleService: Title,
              public adService: AdsService, private historyService: HistoryService,
              public notificationService: NotificationsService) {
  }

  ngOnInit(): void {
    this.history$ = this.historyService.get('ca0770b6-7650-4a0e-b924-aa0396d953ac').pipe(map(r => r.items));
    // Get feed in parallel
    /*
    forkJoin([
      this.notificationService.list(),
    ])
    .pipe(takeUntil(this.subject)).subscribe(([notifications]) => {
      // this.notifications = notifications;
    });*/
  }

  ngAfterViewInit(): void {
    this.loadSwipers();
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  onClick(): void {
    this.themeService.toggle().pipe(takeUntil(this.subject)).subscribe((theme: string) => {
    });
  }

  private loadSwipers(): void {
    this.adSwiper = new Swiper(this.adSwiperRef.nativeElement, {
      observer: true,
      slidesPerView: 'auto',
      freeMode: false,
      preloadImages: false,
      watchSlidesVisibility: false,
      spaceBetween: 16,
      autoplay: {
        delay: 3000
      },
      on: {
        init: (sw) => {
          if (!sw) {
            sw.autoplay.stop();
          }
        },
        imagesReady: (sw) => {
          if (!sw) {
            sw.autoplay.start();
          }
        }
      }
    });

    this.recentSwiper = new Swiper(this.recentSwiperRef.nativeElement, {
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

    this.newsSwiper = new Swiper(this.newsSwiperRef.nativeElement, {
      observer: true,
      slidesPerView: 1,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 32,
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
