import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Amiibo, AmiibosService } from '../amiibos.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-amiibos-list-page',
  templateUrl: './amiibos-list-page.component.html'
})
export class AmiibosListPageComponent implements OnInit {

  amiibos: Observable<Amiibo[]> = undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private amiibosService: AmiibosService
  ) { }

  ngOnInit() {
    this.amiibos = this.activatedRoute.paramMap
      .pipe(switchMap(
        params => params.has('series') ? this.amiibosService.filterAmiibos(params.get('series')) : this.amiibosService.amiibos
      ));
  }
}
