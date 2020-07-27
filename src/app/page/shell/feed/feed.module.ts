import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@alexandria/common/shared.module';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule
  ]
})
export class FeedModule { }
