import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ShopDashboardComponent} from './components/shop/shop-dashboard/shop-dashboard.component';
import {ShopListComponent} from './components/shop/shop-list/shop-list.component';
import {ProductDetailsComponent} from './components/shop/product-details/product-details.component';
import {FavoriteDashboardComponent} from './components/favorite/favorite-dashboard/favorite-dashboard.component';
import {FavoriteListComponent} from './components/favorite/favorite-list/favorite-list.component';
import {AdministrationGuard} from './services/administration.guard';
import {ShopGuard} from './services/shop.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }, {
    path: 'favorite',
    component: FavoriteDashboardComponent,
    children: [
      {path: '', component: FavoriteListComponent}
    ]
  },
  {
    path: 'shop',
    component: ShopDashboardComponent,
    canActivate: [ShopGuard],
    children: [
      {path: '', component: ShopListComponent},
      {path: 'list', component: ShopListComponent},
      {path: ':productId', component: ProductDetailsComponent},
    ]
  }, {
    path: 'administration',
    loadChildren: () => import('./components/administration/administration.module').then(m => m.AdministrationModule),
    canLoad: [AdministrationGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
