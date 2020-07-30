import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent implements OnInit {
  @Input() backgroundURL: string;
  @Input() title: string;
  @Input() description: string;

  @Input() uri: string;
  @Input() aggregateID: string;
  @Input() externalID?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
