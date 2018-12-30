import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [StandardLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MatToolbarModule
  ]
})
export class CoreModule { }
