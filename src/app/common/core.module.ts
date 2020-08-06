import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NotificationsService } from './service/notifications/notifications.service';
import { themeReducer } from './store/reducer/theme.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ThemeEffects } from '@alexandria/common/store/effect/theme.effect';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ theme: themeReducer }),
    EffectsModule.forRoot([
      ThemeEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
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
