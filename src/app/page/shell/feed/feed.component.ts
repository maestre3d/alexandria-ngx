import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../../common/service/theme.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface Ad {
  title: string;
  description: string;
  image: string;
}

const Ads: Array<Ad> = [
  {
    title: 'The Cold War',
    description: 'Dive into the space race.',
    image: 'https://images.unsplash.com/photo-1457979406492-d1e6b97f3f55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  },
  {
    title: 'Learn Astrophysics',
    description: 'Check out the top authors',
    image: 'https://images.unsplash.com/photo-1579532040113-c94c4a38a1e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=516&q=80'
  }
];

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  private subject: Subject<void> = new Subject();
  public ads = Ads;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
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
