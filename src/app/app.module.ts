import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TudoComponent } from './tudo/tudo.component';
import { Tudo2Component } from './tudo2/tudo2.component';

@NgModule({
  declarations: [
    AppComponent,
    TudoComponent,
    Tudo2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
