import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [  // export array is added for making shared module/component available for all other module/component
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
