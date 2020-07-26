import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../../common/service/theme.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  private subject: Subject<void> = new Subject();

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subject.next();
    this.subject.complete();
  }

  onClick(): void {
    this.themeService.toggle().pipe(takeUntil(this.subject)).subscribe((theme: string) => {
      console.log(theme);
    });
  }
}
