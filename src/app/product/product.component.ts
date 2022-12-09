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
  @Input() message: string[]   // Messages aléatoires

  @Output() messsageChange: EventEmitter<any> = new EventEmitter();
  @Output() restore: EventEmitter<any> = new EventEmitter();
  messages: string[] = ['Subscribe to our newsletter to be in touch!', 'Angular is awesome!', 'Lot of surprise are waiting you!'];

  /// Using Version 1
  // Version 1
  changeMessage(): void {
    let messagesIndex = Math.floor((Math.random() * this.messages.length));
    let msg = this.messages[messagesIndex];
    this.messsageChange.emit(msg);
  }
  restoreMessage() {
    this.restore.emit();
  }
  constructor(private CartService: CartService) {
  }

  // Fonction get permet de lier une propriété d'un objet à une fonction qui sera appelée lorsqu'on accédera à la propriété.
  // != getter statique
  get randomMessage(): string {
    let index = Math.floor((Math.random() * this.messages.length));
    return this.messages[index];
  }
  //  Version 2 avec param 
  changeMessage2(message: string): void {
    this.messsageChange.emit(message);
  }

  addService(item: Product) {
    let result = this.CartService.addProduct(item);
    if (result) {
      console.log("=> getItemList() ", this.CartService.getItemList())
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

