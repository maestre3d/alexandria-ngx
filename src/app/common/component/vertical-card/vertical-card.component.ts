import { Component, OnInit, Input } from '@angular/core';
import { IVerticalCardProps } from '@alexandria/common/interface/vertical-card.interface';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent implements OnInit {
  @Input() props: IVerticalCardProps;

  constructor() { }

  ngOnInit(): void {
  }

}
