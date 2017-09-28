import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MATERIAL_COMPATIBILITY_MODE} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule
  ],
  providers: [{provide: MATERIAL_COMPATIBILITY_MODE, useValue: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
