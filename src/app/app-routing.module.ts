import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AmiibosModule } from './amiibos/amiibos.module';
import { StandardLayoutComponent } from './core/standard-layout/standard-layout.component';
import { AmiibosListPageComponent } from './amiibos/amiibos-list-page/amiibos-list-page.component';
import { AmiiboSeriesNavigationComponent } from './amiibos/amiibo-series-navigation/amiibo-series-navigation.component';

const routes: Routes = [
  { path: '', component: StandardLayoutComponent, children: [
    { outlet: 'navigation', path: '', component: AmiiboSeriesNavigationComponent },
    { path: 'amiibos/:series', component: AmiibosListPageComponent },
    { path: 'amiibos', component: AmiibosListPageComponent },
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
