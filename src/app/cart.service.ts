import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CartService {

  items = [];
  @Output() notify = new EventEmitter();

  addToCart(product) {
    this.items.push(product);
    this.notify.emit({itemCount: this.getItemCount()})
  }

  getItems() {
    return this.items;
  }

  getItemCount() {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    this.notify.emit({itemCount: this.getItemCount()});
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) { }

}