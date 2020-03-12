import {Injectable, Injector} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ApplicationState} from '../store';
import {getLoadingCounter} from './store/loading.reducer';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {LoadingOverlayComponent} from './component/loading-overlay.component';

@Injectable()
export class LoadingOverlayService {

  private overlayRef: OverlayRef;


  constructor(private store: Store<ApplicationState>, private overlay: Overlay, private injector: Injector) {
    this.store.pipe(
      select(getLoadingCounter)
    ).subscribe(v => {

      if (v === 0) {
        this.hideOverlay();
      } else if (v >= 1) {
        if (!this.overlayRef) {
          this.showOverlay();
        }
      }
    });
  }

  showOverlay() {
    const overlayRef: OverlayRef = this.overlay.create({
      height: '100vh',
      width: '100vw',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global(),
      backdropClass: 'shadow',
      hasBackdrop: true
    });
    const componentPortal: ComponentPortal<LoadingOverlayComponent> =
      new ComponentPortal<LoadingOverlayComponent>(LoadingOverlayComponent, null,
        this.createPortalInjector(overlayRef));
    overlayRef.attach(componentPortal);
    this.overlayRef = overlayRef;

  }

  createPortalInjector(overlayRef: OverlayRef): PortalInjector {
    const weakMap = new WeakMap();
    weakMap.set(OverlayRef, overlayRef);
    return new PortalInjector(this.injector, weakMap);
  }

  hideOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
    }

  }

}
