import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmiibosTableComponent } from './amiibos-table/amiibos-table.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AmiibosService } from './amiibos.service';
import { AmiibosListPageComponent } from './amiibos-list-page/amiibos-list-page.component';
import { AmiiboSeriesNavigationComponent } from './amiibo-series-navigation/amiibo-series-navigation.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AmiibosTableComponent, AmiibosListPageComponent, AmiiboSeriesNavigationComponent],
  providers: [AmiibosService],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatListModule
  ]
})
export class AmiibosModule { }
