import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandardLayoutComponent } from './standard-layout/standard-layout.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [StandardLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CoreModule { }
