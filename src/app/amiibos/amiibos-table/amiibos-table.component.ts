import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-amiibos-table',
  templateUrl: './amiibos-table.component.html'
})
export class AmiibosTableComponent implements OnInit {

  displayedColumns = ['name', 'series', 'releaseDate'];
  dataSource = undefined;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.dataSource = this.http.get('https://amiibos-elm.herokuapp.com/api/amiibos');
  }

}
