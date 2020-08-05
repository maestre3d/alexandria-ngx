import { Component, OnInit, OnDestroy } from '@angular/core';
import { Config } from '@alexandria/config/alexandria.config';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, filter } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {
  // RxJS
  private subject$: Subject<void> = new Subject();
  // Data
  public appName = Config.Name;
  // UI
  public isSignIn = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isSignIn = this.router.url.includes('/accounts/authenticate') ? true : false;
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).pipe(takeUntil(this.subject$))
    .subscribe((nav: NavigationEnd) => {
      this.isSignIn = nav.url.includes('/accounts/authenticate') ? true : false;
    });
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }
}
