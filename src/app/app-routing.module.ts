import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AmiibosModule } from './amiibos/amiibos.module';
import { StandardLayoutComponent } from './core/standard-layout/standard-layout.component';
import { AmiibosTableComponent } from './amiibos/amiibos-table/amiibos-table.component';

const routes: Routes = [
  { path: '', component: StandardLayoutComponent, children: [
    { path: 'amiibos', component: AmiibosTableComponent },
    { path: '', redirectTo: '/amiibos', pathMatch: 'full' }
  ]},
  { path: '**', redirectTo: '/amiibos'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule,
    AmiibosModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
