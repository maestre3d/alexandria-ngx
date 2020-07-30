import { Component, OnInit, Input } from '@angular/core';
import { IHorizontalItemProps } from '../../interface/horizontal-item.interface';

@Component({
  selector: 'app-horizontal-item',
  templateUrl: './horizontal-item.component.html',
  styleUrls: ['./horizontal-item.component.scss']
})
export class HorizontalItemComponent implements OnInit {
  @Input() props: IHorizontalItemProps;

  constructor() { }

  ngOnInit(): void {
  }

}
