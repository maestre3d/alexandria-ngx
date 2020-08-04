import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Config } from '@alexandria/config/alexandria.config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  // Data
  public query: string;
  // RxJS
  private subject$: Subject<void> = new Subject();
  // UI
  public isSearching = false;

  constructor(private activeRoute: ActivatedRoute, private router: Router,
              private title: Title) {
  }

  ngOnInit(): void {
    this.activeRoute.queryParamMap.pipe(takeUntil(this.subject$)).subscribe((param) => {
      this.query = param.get('q');
      if (this.query && this.query !== '') {
        this.title.setTitle(`${this.query} • ${Config.Name} Search`);
      }
    }, (err) => {
      console.error(err);
    });
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }

  onQuery(event: KeyboardEvent): void {
    if (this.query !== '') {
      setTimeout(() => {
        if (!this.isSearching) {
          this.isSearching = true;
          this.router.navigate(['/search'], { queryParams: {q: this.query} });
          return;
        }

        this.isSearching = false;
      }, 1000);
    }
  }

}
