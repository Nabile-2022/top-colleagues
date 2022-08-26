import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColleguesComponent } from './collegues/collegues.component';
import { AddClientComponent } from './add-client/add-client.component';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
    ColleguesComponent,
    AddClientComponent
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
