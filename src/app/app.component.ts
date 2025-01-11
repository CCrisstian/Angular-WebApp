import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from "./components/products.component";
import { Product } from './models/product';
import { FormComponent } from "./components/form.component";
import Swal from 'sweetalert2';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  title = 'Proyecto: "Angular-Products"';

  products: Product[] = [];

  countId = signal(3);

  productSelected: Product = new Product();

  constructor(private service: ProductService) { }

  ngOnInit(): void {

    this.service.findAll().subscribe(products => this.products = products);

    // this.products = [
    //   {
    //     id: 1,
    //     name: 'Monitor Asus 35 pulgadas',
    //     description: 'El monitor es perfecto para juegos en alta resolución!',
    //     price: 1000
    //   },
    //   {
    //     id: 2,
    //     name: 'Iphone 16 Pro',
    //     description: 'El smartphone es excelente e incluye Apple Intelligence',
    //     price: 1700
    //   }
    // ]
  }

  onUpdateProductEvent(product: Product): void {
    this.productSelected = { ...product };
  }

  addProduct(product: Product): void {

    if (product.id > 0) {
      this.service.update(product).subscribe(productUpdated => {

        this.products = this.products.map(prod => {
          if (prod.id == product.id) {
            return { ...productUpdated }
          }
          return prod;
        })

        Swal.fire({
          title: "Producto ACTUALIZADO",
          text: `Producto ${productUpdated.name} ACTUALIZADO con exito!!`,
          icon: "success"
        });
      })

    } else {
      this.service.create(product).subscribe(productNew => {

        this.products = [... this.products, { ...productNew }];

        Swal.fire({
          title: "Producto CREADO",
          text: `Producto ${productNew.name} CREADO con exito!`,
          icon: "success"
        });
      })
    }
  }


  onRemoveProductEvent(id: number): void {

    Swal.fire({
      title: "¿Estás seguro que quieres eliminar?",
      text: "No serás capas de revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.remove(id).subscribe(productDeleted => {

          this.products = this.products.filter(product => product.id != id);

          Swal.fire({
            title: "Producto ELIMINADO",
            text: `Producto ${productDeleted.name} ELIMINADO con exito`!,
            icon: "success"
          });
        })
      }
    });
  }
}
