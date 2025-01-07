import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./components/products.component";
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  title = 'Proyecto: "Angular-Products"';

  products: Product[] = [];

  ngOnInit(): void {
    this.products = [
      {
        id: 1,
        name: 'Monitor Asus 35 pulgadas',
        description: 'El monitor es perfecto para juegos en alta resolución!',
        price: 1000
      },
      {
        id: 2,
        name: 'Iphone 16 Pro',
        description: 'El smartphone es excelente e incluye Apple Intelligence',
        price: 1700
      }
    ]
  }

}
