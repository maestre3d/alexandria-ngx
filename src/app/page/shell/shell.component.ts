import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  searchValue = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onQuery(event: KeyboardEvent): void {
    this.router.navigate(['/search'], { queryParams: {query: this.searchValue} });
  }
}
