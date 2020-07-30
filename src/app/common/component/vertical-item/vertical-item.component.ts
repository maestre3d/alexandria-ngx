import { Component, OnInit, Input } from '@angular/core';
import { IVerticalItemProps } from '../../interface/vertical-item.interface';

@Component({
  selector: 'app-vertical-item',
  templateUrl: './vertical-item.component.html',
  styleUrls: ['./vertical-item.component.scss']
})
export class VerticalItemComponent implements OnInit {
  @Input() props: IVerticalItemProps;
  @Input() isAd: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
