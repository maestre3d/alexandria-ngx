import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Config } from '@alexandria/config/alexandria.config';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(`Page Not Found • ${Config.Name}`);
  }

}
