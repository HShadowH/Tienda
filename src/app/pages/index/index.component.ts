import { Component,OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cosas: any[] = ['Auto','Casa','Otra Cosa']

  products:any[]= [];
constructor(private _datos:DatosService){

}
ngOnInit():void{
  this._datos.getSizes().subscribe(response =>{
    this.products = response;

  });
}






}
