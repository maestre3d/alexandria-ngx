import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NotificationsService } from './service/notifications/notifications.service';
import { themeReducer } from './store/reducer/theme.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ThemeEffects } from '@alexandria/common/store/effect/theme.effect';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ theme: themeReducer }),
    EffectsModule.forRoot([
      ThemeEffects
    ])
  ],
  providers: [
    NotificationsService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('core module already loaded, import only in app module');
    }
  }
}
