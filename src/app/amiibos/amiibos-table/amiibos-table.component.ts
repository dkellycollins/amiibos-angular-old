import { Component, OnInit } from '@angular/core';
import { AmiibosService } from '../amiibos.service';

@Component({
  selector: 'app-amiibos-table',
  templateUrl: './amiibos-table.component.html'
})
export class AmiibosTableComponent implements OnInit {

  displayedColumns = ['name', 'series', 'releaseDate'];
  dataSource = undefined;

  constructor(
    private amiibosService: AmiibosService
  ) { }

  ngOnInit() {
    this.dataSource = this.amiibosService.amiibos;
  }

}
