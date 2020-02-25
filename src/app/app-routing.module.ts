import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ShopDashboardComponent} from './components/shop/shop-dashboard/shop-dashboard.component';
import {ShopListComponent} from './components/shop/shop-list/shop-list.component';
import {ProductDetailsComponent} from './components/shop/product-details/product-details.component';
import {FavoriteDashboardComponent} from './components/favorite/favorite-dashboard/favorite-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'favorite',
    component: FavoriteDashboardComponent
  },
  {
    path: 'shop',
    component: ShopDashboardComponent,
    children: [
      {path: '', component: ShopListComponent},
      {path: ':productId', component: ProductDetailsComponent},
      {path: 'list', component: ShopListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
