import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmiibosTableComponent } from './amiibos-table/amiibos-table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AmiibosTableComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class AmiibosModule { }
