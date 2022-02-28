import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as moment from 'moment';

@Component({
  selector: 'ngx-productos-top-fechas',
  templateUrl: './productos-top-fechas.component.html',
  styleUrls: ['./productos-top-fechas.component.scss']
})
export class ProductosTopFechasComponent implements OnInit {

  mostrarTabla: any
  productosTop: any
  fechaInicio: any
  fechaFin: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {}

  buscarProducto(){

    this.authSvc.productosTopEntreFechas(this.fechaInicio,this.fechaFin).subscribe(data=>{
      this.productosTop = data
      this.mostrarTabla = true
    })

  }

  cambioRango(event){
    if (event.start) this.fechaInicio = moment(event.start).format('YYYY-MM-DD');
    if (event.end) this.fechaFin = moment(event.end).format('YYYY-MM-DD');
    console.log(this.fechaInicio)
    console.log(this.fechaFin)
  }

  vacear(){
    this.mostrarTabla = false
    this.productosTop = ''
  }


  config = {
    actions: false,
    columns: {
      id_product: {
        title: 'IdProduct',
        type: 'number',
      },
      name: {
        title: 'Producto',
        type: 'string',
      },
      nombre_cat: {
        title: 'Categoria',
        type: 'string',
      },
      suma_cantidad: {
        title: 'Cantidad Vendida',
        type: 'number',
      },
      suma_importes: {
        title: 'Importe',
        type: 'number',
      }
    },
  };

}
