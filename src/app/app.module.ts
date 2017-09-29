import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material/core';
import { ProductService, ShoppingCartService } from './shared/services';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent, ProductTileComponent } from './home';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent,  ProductDetailsComponent } from './product';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from './error/error.component';
import { CartComponent } from './cart/cart.component';
import {CartResolver} from "./cart/cart-resolver";
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductTileComponent,
    ProductComponent,
    ProductDetailsComponent,
    ErrorComponent,
    CartComponent,
    CheckoutComponent
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
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
              ProductService, ShoppingCartService, CartResolver ],
  bootstrap: [AppComponent]
})
export class AppModule { }
