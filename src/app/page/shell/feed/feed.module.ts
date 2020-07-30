import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@alexandria/common/shared.module';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';
import { ListVerticalItemModule } from '@alexandria/component/list-vertical-item/list-vertical-item.module';
import { ListVerticalCardModule } from '@alexandria/component/list-vertical-card/list-vertical-card.module';
import { HorizontalItemModule } from '@alexandria/component/horizontal-item/horizontal-item.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    ListVerticalCardModule,
    ListVerticalItemModule,
    HorizontalItemModule
  ]
})
export class FeedModule { }
