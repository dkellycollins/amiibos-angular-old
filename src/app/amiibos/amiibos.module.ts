import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmiibosTableComponent } from './amiibos-table/amiibos-table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AmiibosService } from './amiibos.service';
import { AmiibosListPageComponent } from './amiibos-list-page/amiibos-list-page.component';

@NgModule({
  declarations: [AmiibosTableComponent, AmiibosListPageComponent],
  providers: [AmiibosService],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class AmiibosModule { }
