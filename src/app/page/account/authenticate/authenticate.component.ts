import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Config } from '@alexandria/config/alexandria.config';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {
  // UI
  public isSignIn = true;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle(`Sign In • ${Config.Name}`);
  }

}
