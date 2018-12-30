import { Component, Input } from '@angular/core';
import { Amiibo } from '../amiibos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-amiibos-table',
  templateUrl: './amiibos-table.component.html'
})
export class AmiibosTableComponent {

  @Input()
  dataSource: Observable<Amiibo[]>;

  displayedColumns = ['name', 'series', 'releaseDate'];

  constructor() { }

}
