import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductDashboardComponent} from './product-dashboard/product-dashboard.component';
import {CreateProductComponent} from './create-product/create-product.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: ProductDashboardComponent},
    {path: 'create-product', component: CreateProductComponent}
  ])],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {

}
