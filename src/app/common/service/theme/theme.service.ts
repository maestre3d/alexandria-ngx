import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeKind } from '../../enum/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeKey = 'prefers-color';
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Get theme current state
   */
  provide(): Observable<string> {
    return new Observable((observer) => {
      // Get theme (light/dark) from browser cookies
      let theme = localStorage.getItem(this.themeKey);
      // If value is not available, send default theme scheme
      theme = theme !== '' ? theme : ThemeKind.Light;

      // Store updated value
      localStorage.setItem(this.themeKey, theme);

      // Send back new data
      observer.next(theme);

      // DO NOT SEND ANY ERROR, PREFER SENDING DEFAULT VALUES TO AVOID
      // APP CRASHES
      observer.complete();
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
        localStorage.setItem(this.themeKey, theme);
        this.renderer.setAttribute(document.querySelector('html'), 'data-theme', theme);
        this.renderer.addClass(document.querySelector('html'), 'theme-transition');
        window.setTimeout(() => {
            this.renderer.removeClass(document.querySelector('html'), 'theme-transition');
        }, 200);

        observer.next();
        observer.complete();
        return;
      }

      observer.error(new Error('theme_kind is not valid'));
      observer.complete();
      return;
    });
  }

  /**
   * Toggle theme kind inversion
   */
  toggle(): Observable<string> {
    return new Observable((observer) => {
      // Get current theme
      const currentState = localStorage.getItem(this.themeKey);

      // Invert theming and store new state in browser local storage
      const newState = currentState === ThemeKind.Light ? ThemeKind.Dark : ThemeKind.Light;
      localStorage.setItem(this.themeKey, newState);

      this.renderer.setAttribute(document.querySelector('html'), 'data-theme', newState);
      this.renderer.addClass(document.querySelector('html'), 'theme-transition');
      window.setTimeout(() => {
          this.renderer.removeClass(document.querySelector('html'), 'theme-transition');
      }, 200);

      observer.next(newState);
      observer.complete();
      return;
    });
  }

  /**
   * Load the current theme into the DOM
   */
  load(): void {
    // Get current theme
    const currentState = localStorage.getItem(this.themeKey);
    if (!currentState) {
      localStorage.setItem(this.themeKey, ThemeKind.Light);
    }
    this.renderer.setAttribute(document.querySelector('html'), 'data-theme', currentState ? currentState : ThemeKind.Light);
  }
}
