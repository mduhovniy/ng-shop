import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material/core';
import {ProductService} from './shared/services';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent, ProductTileComponent } from './home';
import { ProductComponent } from './product';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    HttpClientModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true},
    ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
