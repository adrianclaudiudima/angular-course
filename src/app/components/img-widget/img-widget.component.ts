import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-img-widget',
  templateUrl: 'img-widget.component.html',
  styleUrls: ['img-widget.component.scss']
})
export class ImgWidgetComponent {

  @Input()
  imageType: ImageType = 'portrait';
  @Input()
  applyPadding = true;
  @Input()
  img: string;
  @Input()
  blr: 0;
  @Input()
  brr: 0;
  @Input()
  tlr: 0;
  @Input()
  trr: 0;

}

export type ImageType = 'portrait' | 'square';

export interface ImageBorderRadius {
  topLeftRadius: number;
  topRightRadius: number;
  bottomLeftRadius: number;
  bottomRightRadius: number;
}
