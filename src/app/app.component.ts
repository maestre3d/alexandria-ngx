import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ThemeService } from './common/service/theme/theme.service';
import { MediaMatcher } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { ThemeKind } from '@alexandria/enum/theme.enum';
import { inject } from './common/store/action/theme.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private schemeQuery: MediaQueryList;
  private schemeListener: (e: MediaQueryListEvent) => void = (e: MediaQueryListEvent) => {
    console.log(e.matches);
    this.store.dispatch(inject(e.matches ? {theme: ThemeKind.Dark} : {theme: ThemeKind.Light}));
  }

  constructor(private themeService: ThemeService, private store: Store<{theme: ThemeKind}>,
              private mediaMatcher: MediaMatcher) {
    // Inject color scheme if system color scheme is detected
    this.themeService.load();
    this.detectSchemeChange();
  }

  ngOnDestroy(): void {
    if (this.schemeQuery.removeEventListener !== undefined) {
      this.schemeQuery.removeEventListener('change', this.schemeListener);
    }
  }

  detectSchemeChange(): void {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      this.schemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (this.schemeQuery.addEventListener !== undefined) {
        this.schemeQuery.addEventListener('change', this.schemeListener);
      } else {
        this.schemeQuery.onchange = this.schemeListener;
      }
    }
  }
}
