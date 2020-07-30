import { Component, OnInit, Input } from '@angular/core';
import { IVerticalCardProps } from '@alexandria/common/interface/vertical-card.interface';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent implements OnInit {
  @Input() aggregate: IVerticalCardProps;
  @Input() Uri: string;
  @Input() useQuery: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
