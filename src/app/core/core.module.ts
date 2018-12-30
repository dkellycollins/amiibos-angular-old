import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StandardLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ]
})
export class CoreModule { }
