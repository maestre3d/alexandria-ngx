import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subject, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swiper from 'swiper';

import { ThemeService } from '../../../common/service/theme/theme.service';
import { IAd } from '../../../common/mock/ad.mock';
import { IHistory } from '../../../common/mock/history.mock';
import { AdsService } from '../../../common/service/ads/ads.service';
import { HistoryService } from '../../../common/service/history/history.service';
import { NotificationsService } from 'src/app/common/service/notifications/notifications.service';
import { INotification } from 'src/app/common/mock/notification.mock';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, AfterViewInit, OnDestroy {
  // Observers
  private subject: Subject<void> = new Subject();

  // Data
  public ads: Array<IAd>;
  public history: IHistory;
  public notifications: Array<INotification>;

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
              private adService: AdsService, private historyService: HistoryService,
              private notificationService: NotificationsService) {
  }

  ngOnInit(): void {
    // Get feed in parallel
    forkJoin([
      this.adService.list(),
      this.historyService.get('ca0770b6-7650-4a0e-b924-aa0396d953ac'),
      this.notificationService.list(),
    ])
    .pipe(takeUntil(this.subject)).subscribe(([ads, history, notifications]) => {
      this.ads = ads;
      this.history = history;
      this.notifications = notifications;
    });
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
      // cssMode: true,
      observer: true,
      slidesPerView: 'auto',
      // SET FREE MODE IF YOU WANT TO MOVE SWIPER IG STORIE'S LIKE
      freeMode: false,
      preloadImages: false,
      watchSlidesVisibility: false,
      spaceBetween: 16,
      autoplay: {
        delay: 5000,
      },
      // mousewheel: true,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
        elementClass: 'swiper-lazy',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      }
    });

    this.recentSwiper = new Swiper(this.recentSwiperRef.nativeElement, {
      // cssMode: true,
      observer: true,
      slidesPerView: 'auto',
      // SET FREE MODE IF YOU WANT TO MOVE SWIPER IG STORIE'S LIKE
      freeMode: true,
      preloadImages: false,
      watchSlidesVisibility: false,
      spaceBetween: 32,
      // mousewheel: true,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 3,
        elementClass: 'swiper-lazy',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader',
      }
    });

    this.newsSwiper = new Swiper(this.newsSwiperRef.nativeElement, {
      // cssMode: true,
      observer: true,
      slidesPerView: 'auto',
      // SET FREE MODE IF YOU WANT TO MOVE SWIPER IG STORIE'S LIKE
      freeMode: true,
      preloadImages: false,
      watchSlidesVisibility: false,
      spaceBetween: 32,
      // mousewheel: true,
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
