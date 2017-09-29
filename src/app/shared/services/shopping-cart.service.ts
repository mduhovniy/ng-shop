import { Injectable } from '@angular/core';

export interface ShoppingCartState {
  [key: string]: number;  // product ID should be a string, and quantity - a number
}

const SHOPPING_CART_KEY = 'ngs_shopping_cart';  // a key for local storage

@Injectable()
export class ShoppingCartService {

  private state: ShoppingCartState;

  constructor() {
    this.state = this.loadState() || {};  // load from local storage
  }

  // Load state from local storage
  private loadState(): ShoppingCartState {
    return JSON.parse(localStorage.getItem(SHOPPING_CART_KEY));
  }

  // Save state in local storage
  private saveState(): void {
    localStorage.setItem(SHOPPING_CART_KEY, JSON.stringify(this.state));
  }

  get totalQuantity(): number {
    return Object.keys(this.state).reduce((total, productId) => {
      return total + this.state[productId];
    }, 0);
  }

  getItems(): ShoppingCartState {
    // Clone and return a copy of the shopping cart state
    return {...this.state};
  }

  // Initialize the shopping card with the values
  setItems(items: ShoppingCartState): void {
    this.state = items;  // may come from the server
    this.saveState();
  }

  // Add a product to the cart or update its qty
  addItem(productId: string, quantity: number): void {
    if (quantity > 0) {
      this.state[productId] = (this.state[productId] || 0) + quantity;
      this.saveState();
    }
  }

  removeItem(productId: string): void {
    delete this.state[productId];
    this.saveState();
  }

  // Update the quantity in the state obj or remove it
  setQuantity(productId: string, quantity: number): void {
    if (quantity > 0) {
      this.state[productId] = quantity;
      this.saveState();
    } else {
      this.removeItem(productId);
    }
  }
}
