import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../../../store';
import {LoadProductsByIdAction} from '../../../store/products/products.actions';
import {getProductFromStateById, getProductsApplicationState} from '../../../store/products/products.selectors';
import {Observable} from 'rxjs';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: 'product-details.component.html',
  styleUrls: ['product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product$: Observable<Product>;


  constructor(private activatedRoute: ActivatedRoute, private store: Store<ApplicationState>) {
  }

  ngOnInit(): void {
    this.product$ = this.activatedRoute.paramMap.pipe(
      map(paramMap => paramMap.get('productId')),
      tap(productId => this.store.dispatch(new LoadProductsByIdAction(Number(productId)))),
      switchMap(productId => {
        return this.store.pipe(
          select(getProductsApplicationState),
          map(prodState => prodState.selectedProduct)
        );
      }),
      tap(product => {
        console.log('got the product ');
        console.log(product);
      })
    );

  }


}
