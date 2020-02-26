import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {ShopDashboardComponent} from './components/shop/shop-dashboard/shop-dashboard.component';
import {ProductCardComponent} from './components/shop/product-card/product-card.component';
import {CartDashboardComponent} from './components/cart/cart-dashboard/cart-dashboard.component';
import {CartListComponent} from './components/cart/cart-list/cart-list.component';
import {CartService} from './services/cart.service';
import {FavoriteService} from './services/favorite.service';
import {ShopService} from './services/shop.service';
import {FavoriteDashboardComponent} from './components/favorite/favorite-dashboard/favorite-dashboard.component';
import {FavoriteListComponent} from './components/favorite/favorite-list/favorite-list.component';
import {ShopListComponent} from './components/shop/shop-list/shop-list.component';
import {FavoriteWidgetComponent} from './components/favorite/favorite-widget/favorite-widget.component';
import {UserInfoService} from './services/user-info.service';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {ProductDetailsComponent} from './components/shop/product-details/product-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatRippleModule} from '@angular/material/core';
import {ImgWidgetComponent} from './components/img-widget/img-widget.component';
import {CartWidgetComponent} from './components/cart/cart-widget/cart-widget.component';
import {MatTableModule} from '@angular/material/table';
import {SharedModule} from './modules/shared.module';
import {AuthService} from './services/auth.service';
import {AdministrationGuard} from './services/administration.guard';
import {ShopGuard} from './services/shop.guard';

@NgModule({
  declarations: [
    AppComponent,
    ShopDashboardComponent,
    ProductCardComponent,
    CartDashboardComponent,
    CartListComponent,
    FavoriteDashboardComponent,
    FavoriteListComponent,
    ShopListComponent,
    FavoriteWidgetComponent,
    HomeComponent,
    ProductDetailsComponent,
    CartWidgetComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatRippleModule,
    MatTableModule
  ],
  providers: [
    CartService,
    FavoriteService,
    ShopService,
    UserInfoService,
    AuthService,
    ShopGuard,
    AdministrationGuard
  ],
  exports: [
    ImgWidgetComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
