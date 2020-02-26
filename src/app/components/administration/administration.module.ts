import {NgModule} from '@angular/core';
import {CreateProductComponent} from './create-product/create-product.component';
import {ProductDashboardComponent} from './product-dashboard/product-dashboard.component';
import {AdministrationService} from '../../services/administration.service';
import {SharedModule} from '../../modules/shared.module';
import {AdministrationRoutingModule} from './administration-routing.module';

@NgModule({
  declarations: [
    CreateProductComponent,
    ProductDashboardComponent,
  ],
  imports: [
    SharedModule,
    AdministrationRoutingModule
  ],
  exports: [],
  providers: [
    AdministrationService,
  ]
})
export class AdministrationModule {

}
