import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  //products = []
  products = [
    {
      id: 1,
      name: "iPhone 12",
      specifications: {
        color: "black",
        weight: "250g",
        storage: "256GB",
        price: "1000"
      },
      picture: "../../assets/iphone12.avif"
    },
    {
      id: 2,
      name: "Airpods",
      specifications: {
        color: "white",
        weight: "50g",
        storage: "N/A",
        price: "200"
      },
      picture: "../../assets/airpods1.jpeg"
    },
    {
      id: 3,
      name: "Samsung S22",
      specifications: {
        color: "black",
        weight: "250g",
        storage: "512GB",
        price: "900"
      },
      picture: "../../assets/s22-1.jpg"
    },
    {
      id: 4,
      name: "Samsung Note10",
      specifications: {
        color: "black",
        weight: "250g",
        storage: "256GB",
        price: "950"
      },
      picture: "../../assets/note10-1.png"
    },
    {
      id: 5,
      name: "Phone 14",
      specifications: {
        color: "white",
        weight: "250g",
        storage: "256GB",
        price: "1300"
      },
      picture: "../../assets/iphone14-1.jpeg"
    }
  ]

  welcomeMessage = "Welcome to Myshop";
  title = this.welcomeMessage

  constructor() { }

  onChangeMsg(value: string): void {
    this.title = value;
  }

  ngOnInit(): void {
  }


}
