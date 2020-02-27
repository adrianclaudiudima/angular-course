import {NgModule} from '@angular/core';
import {CreateProductComponent} from './create-product/create-product.component';
import {ProductDashboardComponent} from './product-dashboard/product-dashboard.component';
import {AdministrationService} from '../../services/administration.service';
import {SharedModule} from '../../modules/shared.module';
import {AdministrationRoutingModule} from './administration-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CreateProductComponent,
    ProductDashboardComponent,
  ],
  imports: [
    SharedModule,
    AdministrationRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [],
  providers: [
    AdministrationService,
  ]
})
export class AdministrationModule {

}
