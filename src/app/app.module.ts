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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import {StoreModule} from '@ngrx/store';
import {appReducerToken, getAppReducers} from './store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from './store/products/products.effects';
import {ProductsService} from './services/products.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import {LoadingOverlayComponent} from './loading/component/loading-overlay.component';
import {LoadingOverlayService} from './loading/loading-overlay.service';
import {LoadingInterceptor} from './loading/loading.interceptor';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FavoriteOverlayService} from './components/favorite/favorite-overlay.service';
import {FavoriteOverlayComponent} from './components/favorite/favorite-overlay/favorite-overlay.component';

@NgModule({
  declarations: [
    FavoriteOverlayComponent,
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
    CartWidgetComponent,
    LoadingOverlayComponent
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
    MatTableModule,
    MatTooltipModule,
    StoreModule.forRoot(appReducerToken),
    EffectsModule.forRoot([
      ProductsEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    MatProgressSpinnerModule,

  ],
  providers: [
    ProductsService,
    CartService,
    FavoriteService,
    ShopService,
    UserInfoService,
    AuthService,
    ShopGuard,
    AdministrationGuard,
    FavoriteOverlayService,
    LoadingOverlayService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    },
    {
      provide: appReducerToken,
      useFactory: getAppReducers
    }],
  exports: [
    ImgWidgetComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private loadingOverlayService: LoadingOverlayService) {
  }

}
