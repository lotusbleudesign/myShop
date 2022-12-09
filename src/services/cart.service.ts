import { Injectable, Input } from '@angular/core';
import { Product, MapOfCartProduct } from 'src/app/product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: MapOfCartProduct = {};

  addProduct(item: Product): boolean {
    // add counter same product
    let cartItem = this.cartItems[item.id]
    if (cartItem != undefined) {
      cartItem.counter++
    } else {
      this.cartItems[item.id] = { counter: 1, product: item, price: item.specifications.price };
    }
    return true
  }

  getItemList() {
    return Object.values(this.cartItems)
  }

  subProduct(item: any) {
    let cartItem = this.cartItems[item.id]

    if (cartItem != undefined) {
      this.cartItems[item.id].counter--
      if (this.cartItems[item.id].counter <= 0) {
        delete this.cartItems[item.id]
      }
    }
  }

  getTotalProduct(): number {
    let nbItems = 0
    for (let item of Object.values(this.cartItems)) {
      nbItems += item.counter
    }
    return nbItems;
  }

  getTotalPrice(): number {
    let items = Object.values(this.cartItems)
    let totalPrice = 0
    for (let values of items) {
      totalPrice += Number(values.price) * values.counter
    }
    //console.log("Total prix : ", totalPrice);
    return totalPrice;
  }

}
