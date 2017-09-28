import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material/core';
import {ProductService} from './shared/services';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent, ProductTileComponent } from './home';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [ { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
