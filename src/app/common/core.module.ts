import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ })
  ]
})
export class CoreModule { }
