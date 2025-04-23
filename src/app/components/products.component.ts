import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';
import { EventDispatcher } from '@angular/core/primitives/event-dispatch';

@Component({
  selector: 'table-product',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  
  title = 'Listado de Productos';
  @Input() products: Product[] = [];
  @Output() updateProductEvent = new EventEmitter();
  @Output() removeProductEvent = new EventEmitter();
  
  onUpdateProduct(product: Product): void {
    this.updateProductEvent.emit(product);
  }

  onRemoveProduct(id: number): void{
    this.removeProductEvent.emit(id);
  }
}
