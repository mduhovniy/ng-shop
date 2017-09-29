import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material/core';
import { ProductService } from './shared/services';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent, ProductTileComponent } from './home';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { MatTabsModule } from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent,  ProductDetailsComponent } from './product';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
              ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
