import { Injectable } from '@angular/core';
import { AmiibosModule } from './amiibos.module';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export interface Amiibo {
  name: string;
  displayName: string;
  releaseDate: string;
  series: AmiiboSeries;
}

export interface AmiiboSeries {
  name: string;
  displayName: string;
}

@Injectable()
export class AmiibosService {

  private _amiibos: Observable<Amiibo[]>;

  constructor(
    private http: HttpClient
  ) { }

  public get amiibos(): Observable<Amiibo[]> {
    if (!this._amiibos) {
      this._amiibos = this.http.get<Amiibo[]>('https://amiibos-elm.herokuapp.com/api/amiibos');
    }
    return this._amiibos;
  }

  public get amiibosSeries(): Observable<AmiiboSeries[]> {
    return this.amiibos
      .pipe(map(this.mapToUniqueAmiiboSeries));
  }

  public filterAmiibos(series?: string): Observable<Amiibo[]> {
    if (!series) {
      return this.amiibos;
    }

    return this.amiibos
      .pipe(map(this.filterBySeries(series)));
  }

  private mapToUniqueAmiiboSeries(amiibos: Amiibo[]): AmiiboSeries[] {
    const amiiboSeriesByName = amiibos.reduce((aggregate, amiibo) => {
      if (!aggregate[amiibo.series.name]) {
        aggregate[amiibo.series.name] = amiibo.series;
      }
      return aggregate;
    });

    return Object.values(amiiboSeriesByName);
  }

  private filterBySeries(series: string): (amiibos: Amiibo[]) => Amiibo[] {
    return (amiibos) => amiibos.filter(amiibo => amiibo.series.name === series);
  }
}
