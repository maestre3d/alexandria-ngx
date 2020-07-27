import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule
  ]
})
export class SharedModule { }
