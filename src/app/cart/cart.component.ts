import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { Product, MapOfCartProduct } from 'src/app/product/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() item: any;

  public listItems: MapOfCartProduct;

  constructor(private CartService: CartService) {
  }


  public get valueTotal(): number {
    return this.CartService.getTotalProduct()
  }

  public get montant(): string {
    return '' + this.CartService.getTotalPrice()
  }

  ngOnInit(): void {
    this.listItems = this.CartService.getItemList();
  }

  deleteService(item: Product) {
    //this.CartService.subProduct(item);
    this.CartService.removeProduct(item);
  }

  addItem(item: Product) {
    this.CartService.addProduct(item);
  }

  delItem(item: Product) {
    this.CartService.subProduct(item);
  }

}
