import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-control-makro',
  templateUrl: './control-makro.component.html',
  styleUrls: ['./control-makro.component.scss']
})
export class ControlMakroComponent implements OnInit {

  constructor(public authSvc: AuthService) { }

  source: any;

  ngOnInit(): void {
    this.authSvc.cargarMakroTodosLosProductos().subscribe(data=>{
      this.source = data
      console.log(this.source)
    })
  }

  avanzado(variable: number){

    switch(variable){
      case 1:
        this.source = ''
        this.authSvc.cargarMakroOffersPublicados().subscribe(data=>{
          this.source = data
          console.log(this.source)
        })
        break;
      case 2:
        this.source = ''
        this.authSvc.cargarMakroOffersNoPublicados().subscribe(data=>{
          this.source = data
          console.log(this.source)
        })
        break;
    }

  }

  config = {
    actions: false,
    columns: {
      id_product: {
        title: 'Product Id',
        type: 'number',
      },
      gtin: {
        title: 'GTIN',
        type: 'number',
      },
      sku: {
        title: 'SKU',
        type: 'number',
      },
      name: {
        title: 'Producto',
        type: 'string',
      },
      name_att: {
        title: 'Atributo',
        type: 'string',
      },
      name_value_att:{
        title: 'Valor Atributo',
        type: 'string'
      },
      price:{
        title: 'Precio',
        type: 'number'
      },
      stock:{
        title: 'Stock',
        type: 'number'
      },
      status:{
        title: 'Estado',
        type: 'number'
      },
      date:{
        title: 'Fecha Actualizado',
        type: 'number'
      },
    },
  };

}
