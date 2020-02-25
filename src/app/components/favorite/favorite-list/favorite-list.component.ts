import {Component} from '@angular/core';
import {FavoriteService} from '../../../services/favorite.service';
import {Observable} from 'rxjs';
import {Product} from '../../../model/product';

@Component({
  selector: 'app-favorite-list',
  templateUrl: 'favorite-list.component.html',
  styleUrls: ['favorite-list.component.scss']
})
export class FavoriteListComponent {
  displayedColumns: string[] = ['position', 'name', 'action'];
  dataSource: Observable<Array<Product>>;

  constructor(private favoriteService: FavoriteService) {
    this.dataSource = favoriteService.productsAtFavorite$;
  }

  removeFromFavorite(product: Product) {
    this.favoriteService.removeProductFromFavorite(product.id);
  }

}
