import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../../../store';
import {getTotalProductsAtFavorite} from '../../../store/favorite/favorite.reducer';
import {FavoriteOverlayService} from '../favorite-overlay.service';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-favorite-widget',
  templateUrl: 'favorite-widget.component.html',
  styleUrls: ['favorite-widget.component.scss']
})
export class FavoriteWidgetComponent implements OnInit {

  favoriteCount: Observable<string>;

  constructor(private store: Store<ApplicationState>, private favoriteOverlayService: FavoriteOverlayService) {
  }

  ngOnInit(): void {
    this.favoriteCount = this.store.pipe(
      select(getTotalProductsAtFavorite),
      map(favoriteProducts => `${favoriteProducts}`),
    );
  }


  showDetails(elementRef: MatButton) {
    console.log(elementRef);
    this.favoriteOverlayService.showProductsAtFavorite(elementRef._elementRef.nativeElement);
  }


}
