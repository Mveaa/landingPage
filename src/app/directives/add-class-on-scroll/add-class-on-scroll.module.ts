const AppVersionId = '7.28.1 (1636970117425)';
import { NgModule } from '@angular/core';
import { AddClassOnScrollDirective } from './add-class-on-scroll.directive';

@NgModule({
  declarations: [
    AddClassOnScrollDirective
  ],
  exports: [
    AddClassOnScrollDirective
  ]
})
export class AddClassOnScrollModule {}
