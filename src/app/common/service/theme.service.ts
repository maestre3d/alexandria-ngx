import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { ThemeKind } from '../enum/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'theme';
  private now: Date = new Date();

  constructor(private cookieService: CookieService) {
    this.now.setFullYear(this.now.getFullYear() + 1);
  }

  /**
   * Get theme current state
   */
  provide(): Observable<string> {
    return new Observable((observer) => {
      // Get theme (light/dark) from browser cookies
      let theme = this.cookieService.get(this.themeKey);
      // If value is not available, send default theme scheme
      theme = theme !== '' ? theme : ThemeKind.Light;

      // Store updated value
      this.cookieService.set(this.themeKey, theme, this.now);

      // Send back new data
      observer.next(theme);

      // DO NOT SEND ANY ERROR, PREFER SENDING DEFAULT VALUES TO AVOID
      // APP CRASHES
      return;
    });
  }

  /**
   * Set a theme (override state)
   * @param theme Theme kind
   */
  inject(theme: string): Observable<void> {
    return new Observable((observer) => {
      // Sanitize theme
      theme = theme.toLowerCase();

      if (theme === ThemeKind.Light || theme === ThemeKind.Dark) {
        // Verify if theme is valid, then update browser cookies
        this.cookieService.set(this.themeKey, theme, this.now);
        observer.next();
        return;
      }

      observer.error(new Error('theme_kind is not valid'));
      return;
    });
  }

  /**
   * Toggle theme kind inversion
   */
  toggle(): Observable<string> {
    return new Observable((observer) => {
      // Get current theme
      const currentState = this.cookieService.get(this.themeKey);

      // Invert theming and store new state in browser cookies
      const newState = currentState === ThemeKind.Light ? ThemeKind.Dark : ThemeKind.Light;
      this.cookieService.set(this.themeKey, newState, this.now);

      document.querySelector('html').setAttribute('data-theme', newState);

      observer.next(newState);
      return;
    });
  }

  /**
   * Load the current theme into the DOM
   */
  load(): void {
    // Get current theme
    const currentState = this.cookieService.get(this.themeKey);
    document.querySelector('html').setAttribute('data-theme', currentState);
  }
}
