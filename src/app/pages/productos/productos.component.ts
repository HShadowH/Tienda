import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  ropa = [
    {tipo:'Camisa', available:true},
    {tipo:'Pantalon', available:true},
    {tipo:'Blusa', available:false},
    {tipo:'Zapato', available:false},
    {tipo:'Pantalon', available:true},
    {tipo:'Blusa', available:false},
    {tipo:'Zapato', available:false},
    {tipo:'Pantalon', available:true},
    {tipo:'Blusa', available:false},
    {tipo:'Zapato', available:false},

  ]
  showClotheOnly:boolean = false;

}
