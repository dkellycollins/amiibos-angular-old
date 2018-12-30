import { Component, OnInit } from '@angular/core';
import { AmiibosService, AmiiboSeries } from '../amiibos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-amiibo-series-navigation',
  templateUrl: './amiibo-series-navigation.component.html'
})
export class AmiiboSeriesNavigationComponent {

  amiiboSeries: Observable<AmiiboSeries[]> = this.amiibosService.amiibosSeries;

  constructor(
    private amiibosService: AmiibosService
  ) { }
}
