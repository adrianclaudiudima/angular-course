import {Component, OnInit} from '@angular/core';
import {ShopService} from '../../../services/shop.service';
import {Product} from '../../../model/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-shop-list',
  templateUrl: 'shop-list.component.html',
  styleUrls: ['shop-list.component.scss']
})
export class ShopListComponent implements OnInit {

  listOfProducts$: Observable<Array<Product>>;

  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.listOfProducts$ = this.shopService.listOfProducts$;
  }


}
