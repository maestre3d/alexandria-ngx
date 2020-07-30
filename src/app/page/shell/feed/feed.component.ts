import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import Swiper from 'swiper';

import { ThemeService } from '@alexandria/service/theme/theme.service';
import { AdsService } from '@alexandria/service/ads/ads.service';
import { AdKind } from '@alexandria/enum/ad-kind.enum';
import { HistoryService } from '@alexandria/service/history/history.service';
import { NotificationsService } from '@alexandria/service/notifications/notifications.service';
import { HistoryKind } from '@alexandria/enum/history-kind.enum';
import { TrendingService } from '@alexandria/service/trending/trending.service';
import { IVerticalCardProps } from '@alexandria/common/interface/vertical-card.interface';
import { IVerticalItemProps } from '@alexandria/common/interface/vertical-item.interface';
import { TrendingKind } from '@alexandria/enum/trending-kind.enum';

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
  public history$: Observable<Array<IVerticalItemProps>>;
  public trending$: Observable<Array<IVerticalItemProps>>;

  // UI
  private newsSwiper: Swiper;
  @ViewChild('newsSwiper')
  private newsSwiperRef: ElementRef;

  constructor(private themeService: ThemeService, private metaService: Meta, private titleService: Title,
              public adService: AdsService, private historyService: HistoryService,
              public notificationService: NotificationsService, public trendingService: TrendingService) {
  }

  ngOnInit(): void {
    this.ads$ = this.adService.list().pipe(map(r => {
      const aggregates: Array<IVerticalCardProps> = [];
      r.forEach((ad) => {
        aggregates.push({
          aggregateID: ad.aggregateID,
          title: ad.title,
          description: ad.description,
          backgroundURL: ad.image,
          uri: ad.kind.toLowerCase(),
          useQuery: ad.kind === AdKind.Media,
          adID: ad.id
        });
      });

      return aggregates;
    }));
    this.history$ = this.historyService.get('ca0770b6-7650-4a0e-b924-aa0396d953ac').pipe(map(r => {
      const props: Array<IVerticalItemProps> = [];
      r.items.forEach((item) => {
        props.push({
          aggregateID: item.id,
          uri: item.kind.toLowerCase(),
          displayName: item.name,
          image: item.image,
          useQuery: item.kind === HistoryKind.Media,
          isRounded: item.kind === HistoryKind.Author,
          isVerified: item.verified
        });
      });
      return props;
    }));
    this.trending$ = this.trendingService.list().pipe(map(r => {
      const props: Array<IVerticalItemProps> = [];
      r.forEach((item) => {
        props.push({
          aggregateID: item.id,
          uri: item.kind.toLowerCase(),
          displayName: item.displayName,
          image: item.image,
          useQuery: item.kind === TrendingKind.Media,
          isRounded: item.kind === TrendingKind.Author,
          isVerified: item.verified
        });
      });
      return props;
    }));
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
  }
}
