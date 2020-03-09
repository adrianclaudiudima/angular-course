import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../../model/product';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../../../store';
import {getAllProductsAtFavorite} from '../../../store/favorite/favorite.reducer';
import {RemoveFromFavoriteAction} from '../../../store/favorite/favorite.actions';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-favorite-list',
  templateUrl: 'favorite-list.component.html',
  styleUrls: ['favorite-list.component.scss']
})
export class FavoriteListComponent {
  displayedColumns: string[] = ['position', 'name', 'action'];
  dataSource: Observable<Array<Product>>;

  constructor(private store: Store<ApplicationState>) {
    this.dataSource = this.store.pipe(
      select(getAllProductsAtFavorite)
    );
  }

  removeFromFavorite(product: Product) {
    this.store.dispatch(new RemoveFromFavoriteAction(product.id));
  }

}
