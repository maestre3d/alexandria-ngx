import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';
import { Config } from '@alexandria/config/alexandria.config';
import { Store } from '@ngrx/store';
import { ThemeKind } from '@alexandria/enum/theme.enum';
import { toggle } from '@alexandria/common/store/action/theme.action';
import { AuthService } from '@alexandria/service/auth/auth.service';
import { IUser } from '@alexandria/domain/entity/user.entity';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
  // RxJS
  private subject: Subject<void> = new Subject();
  // Data
  public appName = Config.Name;
  public totalNotification: number;
  public user: IUser = null;
  // UI
  public searchValue = '';
  public isDarkMode: Observable<boolean>;
  private isSearching = false;
  public mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(private router: Router, private routerActive: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef,
              private mediaMatcher: MediaMatcher, private store: Store<{theme: ThemeKind}>, private authService: AuthService) {
    // Using tailwind responsive breakpoints (md)
    this.mobileQuery = mediaMatcher.matchMedia('(min-width: 768px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    if (this.mobileQuery.addEventListener !== undefined) {
      this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    } else {
      this.mobileQuery.onchange = this.mobileQueryListener;
    }
  }

  ngOnInit(): void {
    // Cannot forkJoin router with services

    this.routerActive.queryParamMap.pipe(takeUntil(this.subject)).subscribe(queries => {
      this.searchValue = queries.get('q') || '';
    });

    this.isDarkMode = this.store.select('theme').pipe(map(theme => {
      return theme === ThemeKind.Dark ? true : false;
    }));

    this.authService.getLogged().pipe(takeUntil(this.subject)).subscribe((user: IUser) => {
      this.user = user;
    }, (err: Error) => {
      console.error(err);
    });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
    if (this.mobileQuery.removeEventListener !== undefined) {
      this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    }
  }

  onQuery(event: KeyboardEvent): void {
    if (this.searchValue !== '') {
      setTimeout(() => {
        if (!this.isSearching) {
          this.isSearching = true;
          this.router.navigate(['/search'], { queryParams: {q: this.searchValue} });
          return;
        }

        this.isSearching = false;
      }, 1000);
    }
  }

  onThemeChange(): void {
    this.store.dispatch(toggle());
  }

  onSignOut(): void {
    if (this.user) {
      this.authService.logOut();
      this.router.navigate(['/']);
    }
  }
}
