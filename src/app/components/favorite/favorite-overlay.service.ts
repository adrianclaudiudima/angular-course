import {Injectable, Injector} from '@angular/core';
import {ConnectedPosition, Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {LoadingOverlayComponent} from '../../loading/component/loading-overlay.component';
import {FavoriteOverlayComponent} from './favorite-overlay/favorite-overlay.component';
import {take} from 'rxjs/operators';

@Injectable()
export class FavoriteOverlayService {

  constructor(private overlay: Overlay, private injector: Injector) {
  }

  showProductsAtFavorite(elementRef) {
    const connectedPosition: ConnectedPosition = {
      offsetX: 50,
      offsetY: 50,
      originX: 'start',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'bottom'
    };
    const overlayRef: OverlayRef = this.overlay.create({
      height: '300px',
      width: '300px',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy: this.overlay.position()
        .flexibleConnectedTo(elementRef)
        .withLockedPosition(true)
        .withPositions([connectedPosition]),
      backdropClass: 'shadow',
      hasBackdrop: true
    });
    const componentPortal: ComponentPortal<FavoriteOverlayComponent> =
      new ComponentPortal<FavoriteOverlayComponent>(FavoriteOverlayComponent, null,
        this.createPortalInjector(overlayRef));
    overlayRef.attach(componentPortal);

    overlayRef.backdropClick().pipe(
      take(1)
    ).subscribe(
      v => {
        overlayRef.dispose();
      }
    );
  }

  private createPortalInjector(overlayRef: OverlayRef): PortalInjector {
    const weakMap = new WeakMap();
    weakMap.set(OverlayRef, overlayRef);
    return new PortalInjector(this.injector, weakMap);
  }

}
