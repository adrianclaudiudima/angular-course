import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ImgWidgetComponent} from '../components/img-widget/img-widget.component';

@NgModule({
  declarations: [
    ImgWidgetComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    ImgWidgetComponent
  ]
})
export class SharedModule {

}
