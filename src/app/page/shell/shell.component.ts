import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
  // RxJS
  private subject: Subject<void> = new Subject();
  // Data
  public totalNotification: number;
  // UI
  public searchValue = '';
  private isSearching = false;
  public mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(private router: Router, private routerActive: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef,
              private mediaMatcher: MediaMatcher) {
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
}
