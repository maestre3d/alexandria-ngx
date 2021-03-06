import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

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
import { IHorizontalItemProps } from '@alexandria/common/interface/horizontal-item.interface';
import { AuthService } from '@alexandria/service/auth/auth.service';
import { IUser } from '@alexandria/domain/entity/user.entity';
import { Config } from '@alexandria/config/alexandria.config';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  // Observers
  private subject: Subject<void> = new Subject();

  // Data
  public ads$: Observable<Array<IVerticalCardProps>>;
  public history$: Observable<Array<IVerticalItemProps>>;
  public news$: Observable<Array<IHorizontalItemProps>>;
  public trending$: Observable<Array<IVerticalItemProps>>;
  public user: IUser;
  public appName = Config.Name;

  constructor(private themeService: ThemeService, public adService: AdsService, private title: Title,
              private historyService: HistoryService, public notificationService: NotificationsService,
              public trendingService: TrendingService, public authService: AuthService) {
  }

  ngOnInit(): void {
    // Get feed in parallel
    /*
    forkJoin([
      this.notificationService.list(),
    ])
    .pipe(takeUntil(this.subject)).subscribe(([notifications]) => {
      // this.notifications = notifications;
    });*/

    this.notificationService.count().pipe(takeUntil(this.subject)).subscribe(total => {
      this.title.setTitle(`(${total}) ${Config.Name}`);
    });

    this.loadUser();
    this.loadAds();
    this.loadTrending();
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  private loadAds(): void {
    this.ads$ = this.adService.list().pipe(map(r => {
      const props: Array<IVerticalCardProps> = [];
      r.forEach((ad) => {
        props.push({
          aggregateID: ad.aggregateID,
          title: ad.title,
          description: ad.description,
          backgroundURL: ad.image,
          uri: ad.kind.toLowerCase(),
          query: ad.kind === AdKind.Media ? {id: ad.aggregateID, ad: ad.id} : {ad: ad.id}
        });
      });

      return props;
    }));
  }

  private loadHistory(): void {
    this.history$ = this.historyService.get(this.user.id).pipe(map(r => {
      if (r && r !== null) {
        const props: Array<IVerticalItemProps> = [];
        r.items.forEach((item) => {
          props.push({
            aggregateID: item.id,
            uri: item.kind.toLowerCase(),
            displayName: item.name,
            image: item.image,
            query: item.kind === HistoryKind.Media ? {id: item.id} : '',
            isRounded: item.kind === HistoryKind.Author,
            isVerified: item.verified
          });
        });
        return props;
      }
    }));
  }

  private loadNews(): void {
    this.news$ = this.notificationService.list().pipe(map(r => {
      if (r && r !== null) {
        const props: Array<IHorizontalItemProps> = [];
        r.forEach((item) => {
          props.push({
            aggregateID: item.aggregateID,
            uri: 'media',
            displayName: item.title,
            description: item.description,
            image: item.image,
            query: {id: item.aggregateID, notification: item.id},
            isRounded: true
          });
        });
        return props;
      }
    }));
  }

  private loadTrending(): void {
    this.trending$ = this.trendingService.list().pipe(map(r => {
      const props: Array<IVerticalItemProps> = [];
      r.forEach((item) => {
        props.push({
          aggregateID: item.aggregateID,
          uri: item.kind.toLowerCase(),
          displayName: item.displayName,
          image: item.image,
          query: item.kind === TrendingKind.Media ? {id: item.aggregateID, trend: item.id} : {trend: item.id},
          isRounded: item.kind === TrendingKind.Author,
          isVerified: item.verified
        });
      });
      return props;
    }));
  }

  private loadUser(): void {
    this.authService.getLogged().pipe(takeUntil(this.subject)).subscribe((user: IUser) => {
      if (user && user !== null) {
        this.user = user;
        this.loadHistory();
        this.loadNews();
      }
    }, (err: Error) => {
      console.error(err);
    });
  }
}
