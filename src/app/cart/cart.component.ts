import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ShoppingCartService, ShoppingCartState } from '../shared/services';

@Component({
  selector: 'ngs-cart',
  styleUrls: [ './cart.component.scss' ],
  templateUrl: './cart.component.html'
})
export class CartComponent {

  products: Product[];         // products are populated by the resolver
  quantity: ShoppingCartState; // quantity per product

  constructor(private cart: ShoppingCartService, route: ActivatedRoute) {
    this.products = route.snapshot.data['products'];
    this.quantity = this.cart.getItems();
  }

  get total() {
    const cartItems = this.cart.getItems();
    return Object.keys(cartItems).reduce((total, productId) => {
      const product = this.products.find(p => p.id === productId);
      const qty = cartItems[productId];
      return total + product.price * qty;
    }, 0);
  }

  removeItem(productId: string) {
    const index = this.products.findIndex(p => p.id === productId);
    this.products.splice(index, 1);
    this.cart.removeItem(productId);
  }
}
