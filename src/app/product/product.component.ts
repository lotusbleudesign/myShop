import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { CartService } from 'src/services/cart.service';
import { PopupComponent } from '../popup/popup.component';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  @ViewChild('modal', { static: false }) modal: PopupComponent
  @Input() product: any;

  // Messages aléatoires
  @Input() message: string[]
  @Output() messsageChange: EventEmitter<any> = new EventEmitter();
  messages: string[] = ['Subscribe to our newsletter to be in touch!', 'Angular is answome!', 'Lot of surprise are waiting you!'];


  get randomMessage(): string {
    let index = Math.floor((Math.random() * this.messages.length));
    return this.messages[index];
  }

  changeMessage2(message: string): void {
    this.messsageChange.emit(message);
  }

  // FIXME
  changeMessage(): void {
    let messagesIndex = Math.floor((Math.random() * this.messages.length));
    let msg = this.messages[messagesIndex];
    this.messsageChange.emit(msg);
  }

  //TODO $$$$$$$$$$$$$$$$$
  @Input() name!: string; // ! = null ou indefined ignore
  surpriseName: string = "Alice";
  @Output() changeName = new EventEmitter<string>();
  btnClicked(newname: string): void {
    this.changeName.emit(newname) // name qui est défini dant l'html ou dans une variable
  }
  //$$$$$$$$$$$

  constructor(private CartService: CartService) {
  }

  addService(item: Product) {
    let result = this.CartService.addProduct(item);
    if (result) {
      console.log("=> ", this.CartService.getItemList())
      this.openModal();
    }
  }

  deleteService(item: Product) {
    this.CartService.subProduct(item);
  }

  openModal() {
    this.modal.open(this.product);
  }

}

