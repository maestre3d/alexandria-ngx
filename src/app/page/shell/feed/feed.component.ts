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
import { HistoryKind } from '@alexandria/enum/history-kind.enum';
import { ITrending } from '@alexandria/domain/entity/trending.entity';
import { TrendingService } from '@alexandria/service/trending/trending.service';
import { IVerticalCardProps } from '@alexandria/common/interface/vertical-card.interface';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, AfterViewInit, OnDestroy {
  // Observers
  private subject: Subject<void> = new Subject();

  // Data
  public ads$: Observable<Array<IVerticalCardProps>>;
  public history$: Observable<Array<IHistoryItem>>;
  public trending$: Observable<Array<ITrending>>;
  public MediaType = HistoryKind.Media;

  // UI
  private historySwiper: Swiper;
  @ViewChild('historySwiper')
  private historySwiperRef: ElementRef;

  private newsSwiper: Swiper;
  @ViewChild('newsSwiper')
  private newsSwiperRef: ElementRef;

  private trendingSwiper: Swiper;
  @ViewChild('trendingSwiper')
  private trendigSwiperRef: ElementRef;

  constructor(private themeService: ThemeService, private metaService: Meta, private titleService: Title,
              public adService: AdsService, private historyService: HistoryService,
              public notificationService: NotificationsService, public trendingService: TrendingService) {
  }

  ngOnInit(): void {
    this.ads$ = this.adService.list().pipe(map(r => {
      const aggregates: Array<IVerticalCardProps> = [];
      r.forEach((ad) => {
        aggregates.push({
          id: ad.id,
          aggregateID: ad.authorID,
          title: ad.title,
          description: ad.description,
          backgroundURL: ad.image
        });
      });

      return aggregates;
    }));
    this.history$ = this.historyService.get('ca0770b6-7650-4a0e-b924-aa0396d953ac').pipe(map(r => r.items));
    this.trending$ = this.trendingService.list();
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
    this.historySwiper = new Swiper(this.historySwiperRef.nativeElement, {
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
      spaceBetween: 24,
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          slidesPerColumnFill: 'row',
        }
      }
    });

    this.trendingSwiper = new Swiper(this.trendigSwiperRef.nativeElement, {
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
