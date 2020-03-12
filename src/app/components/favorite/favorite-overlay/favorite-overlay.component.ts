import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../../../store';
import {getAllProductsAtFavorite} from '../../../store/favorite/favorite.reducer';
import {Observable} from 'rxjs';
import {Product} from '../../../model/product';
import {OverlayRef} from '@angular/cdk/overlay';

@Component({
  selector: 'app-favorite-overlay',
  templateUrl: 'favorite-overlay.component.html',
  styleUrls: ['favorite-overlay.component.scss']
})
export class FavoriteOverlayComponent implements OnInit {

  productFavorite: Observable<Product[]>;

  constructor(private store: Store<ApplicationState>, private overlayRef: OverlayRef) {

  }

  ngOnInit(): void {
    this.productFavorite = this.store.pipe(select(getAllProductsAtFavorite));
  }

  disposeOverlay() {
    this.overlayRef.dispose();
  }
}
