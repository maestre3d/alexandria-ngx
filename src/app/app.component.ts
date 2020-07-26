import { Component } from '@angular/core';
import { ThemeService } from './common/service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(themeService: ThemeService) {
    themeService.load();
  }
}
