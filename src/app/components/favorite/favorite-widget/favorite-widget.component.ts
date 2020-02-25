import {Component, OnInit} from '@angular/core';
import {FavoriteService} from '../../../services/favorite.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-favorite-widget',
  templateUrl: 'favorite-widget.component.html',
  styleUrls: ['favorite-widget.component.scss']
})
export class FavoriteWidgetComponent implements OnInit {

  favoriteCount: Observable<string>;

  constructor(private favoriteService: FavoriteService) {
  }

  ngOnInit(): void {
    this.favoriteCount = this.favoriteService.productsAtFavorite$.pipe(
      map(favoriteProducts => `${favoriteProducts.length}`),
    );
  }


}
