import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { Product, CartProduct } from 'src/app/product/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() item: any;
  @Input() total: any;

  public get valueTotal(): number {
    return this.CartService.getTotalProduct()
  }

  public get montant(): string {
    return '' + this.CartService.getTotalPrice()
  }

  constructor(private CartService: CartService) {
  }

  public listItems: CartProduct[] = [];

  ngOnInit(): void {
    this.listItems = this.CartService.getItemList();
  }

  deleteService(item: Product) {
    this.CartService.subProduct(item);
  }

}
