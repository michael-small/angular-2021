import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule
  ],
  exports: [
    MatCardModule,
    MatChipsModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
