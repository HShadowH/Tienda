import { Component, DoCheck,   OnInit  } from '@angular/core';
import { DatosService } from '../../services/datos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck{
  products: any [] = []

  constructor(private _datosService:DatosService){

  }

  ngOnInit(): void {
    this._datosService.getSizes().subscribe((request) =>{
      this.products = request.products
      console.log(this.products)
    })
  }

  ngDoCheck(): void {
     console.log('algo')

  }




}
