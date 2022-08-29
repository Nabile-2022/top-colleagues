import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColleguesComponent } from './collegues/collegues.component';
import { AddClientComponent } from './add-client/add-client.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './welcome/welcome.module';
import { Composant1Component } from './demoObs/composant1/composant1.component';
import { Composant2Component } from './demoObs/composant2/composant2.component';

@NgModule({
  declarations: [
    AppComponent,
    ColleguesComponent,
    AddClientComponent,
    Composant1Component,
    Composant2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
