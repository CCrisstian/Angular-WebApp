import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'table-product',
  imports: [],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  title = 'Listado de Productos';
  @Input() products: Product[] = [];
}
