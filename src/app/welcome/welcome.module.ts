import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePage } from '../pages/welcome/welcome.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    WelcomePage
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WelcomePage
  ]
})
export class WelcomeModule { }
