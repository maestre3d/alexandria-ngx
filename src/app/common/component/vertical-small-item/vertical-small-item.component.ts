import { Component, OnInit, Input } from '@angular/core';
import { IVerticalSmallItemProps } from '@alexandria/common/interface/vertical-small-card-item.interface';

@Component({
  selector: 'app-vertical-small-item',
  templateUrl: './vertical-small-item.component.html',
  styleUrls: ['./vertical-small-item.component.scss']
})
export class VerticalSmallItemComponent implements OnInit {
  @Input() props: IVerticalSmallItemProps;
  @Input() isAd: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
