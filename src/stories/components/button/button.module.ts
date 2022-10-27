import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import UiButtonComponent from "./button.component";


@NgModule({
  declarations: [
    UiButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UiButtonComponent,
  ]
})
export class UiButtonModule {}
