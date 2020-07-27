import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subject, forkJoin } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import Swiper from 'swiper';

import { ThemeService } from '../../../common/service/theme/theme.service';
import { Ad } from '../../../common/mock/ad.mock';
import { Logs, Log } from '../../../common/mock/log.mock';
import { AdsService } from '../../../common/service/ads/ads.service';
import { ContentLogService } from '../../../common/service/content-log/content-log.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, AfterViewInit, OnDestroy {
  // Observers
  private subject: Subject<void> = new Subject();

  // Data
  public ads: Array<Ad>;
  public logs: Array<Log>;

  // UI
  private adSwiper: Swiper;
  @ViewChild('adSwiper')
  private adSwiperRef: ElementRef;

  private recentSwiper: Swiper;
  @ViewChild('recentSwiper')
  private recentSwiperRef: ElementRef;

  constructor(private themeService: ThemeService, private metaService: Meta, private titleService: Title,
              private adService: AdsService, private contentLogService: ContentLogService) {
  }

  ngOnInit(): void {
    // Get feed in parallel
    forkJoin([
      this.adService.list(),
      this.contentLogService.list(),
    ])
    .pipe(takeUntil(this.subject)).subscribe(([ads, logs]) => {
      this.ads = ads;
      this.logs = logs;
    });
  }

  ngAfterViewInit(): void {
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
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  onClick(): void {
    this.themeService.toggle().pipe(takeUntil(this.subject)).subscribe((theme: string) => {
    });
  }
}
