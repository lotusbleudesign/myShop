import { Injectable, Input } from '@angular/core';
import { Product, CartProduct, MapOfCartProduct } from 'src/app/product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // My cart
  private cartItems: MapOfCartProduct = new Map<string, CartProduct>();

  constructor() {
    this.loadCartItems();
    (window as any).cartItems = this.cartItems;
  }

  addProduct(item: Product): boolean {
    // add counter same product
    let cartItem = this.cartItems.get(item.id)

    if (cartItem != undefined) {
      cartItem.counter++
    } else {
      this.cartItems.set(item.id, { counter: 1, product: item });
    }
    this.saveCartItems()
    return true
  }

  getItemList() {
    return this.cartItems
  }

  // Remove one product
  subProduct(item: any) {
    let cartItem = this.cartItems.get(item.id)

    if (cartItem != undefined) {
      cartItem.counter--
      if (cartItem.counter <= 0) {
        this.cartItems.delete(item.id)
      }
    }
    // refresh list on localstorage
    this.saveCartItems()
  }

  getTotalProduct(): number {
    let cartItem = this.cartItems.values()
    let nbItems = 0
    for (let item of Object.values(this.cartItems)) {
      nbItems += item.counter
    }
    return nbItems;
  }

  getTotalPrice(): number {
    let items = this.cartItems.values()

    let totalPrice = 0
    for (let values of items) {
      totalPrice += Number(values.product.specifications.price) * values.counter
    }
    return totalPrice;
  }

  // Remove all products
  removeProduct(item: Product) {
    let cartItem = this.cartItems.get(item.id)

    if (cartItem != undefined) {
      this.cartItems.delete(item.id)
    }
    this.saveCartItems()
  }

  // LocalStorage
  saveCartItems() {
    // console.log("save this.cartItems.entries()", this.cartItems.entries());
    localStorage.setItem("cartItems", JSON.stringify(Array.from(this.cartItems.entries())));
  }

  loadCartItems() {
    let cartItemsJson = localStorage.getItem("cartItems")
    //console.log("===> cartItemsJson", cartItemsJson);
    if (!cartItemsJson) return // Nothing stored

    try {
      let ArrayOfCartItems = JSON.parse(cartItemsJson)
      this.cartItems = new Map(ArrayOfCartItems);
      //console.log("===>", ArrayOfCartItems, this.cartItems);
    } catch (error) {
      console.error("Error when deserialized cartItems", error);
    }
  }

}
