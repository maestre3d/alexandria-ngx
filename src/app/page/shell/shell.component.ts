import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationsService } from '../../common/service/notifications/notifications.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

  constructor(private router: Router, private notificationService: NotificationsService,
              private routerActive: ActivatedRoute) {
  }

  ngOnInit(): void {
    // Cannot forkJoin router with services
    this.notificationService.count().pipe(takeUntil(this.subject)).subscribe(total => {
      this.totalNotification = total;
    });

    this.routerActive.queryParamMap.pipe(takeUntil(this.subject)).subscribe(queries => {
      this.searchValue = queries.get('query') || '';
    });
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  onQuery(event: KeyboardEvent): void {
    setTimeout(() => {
      if (!this.isSearching) {
        this.isSearching = true;
        this.router.navigate(['/search'], { queryParams: {query: this.searchValue} });
        return;
      }

      this.isSearching = false;
    }, 750);
  }
}
