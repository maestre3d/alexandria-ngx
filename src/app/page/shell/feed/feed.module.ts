import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@alexandria/common/shared.module';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { VerticalSmallItemComponent } from '@alexandria/common/component/vertical-small-item/vertical-small-item.component';

@NgModule({
  declarations: [FeedComponent, VerticalSmallItemComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
  ]
})
export class FeedModule { }
