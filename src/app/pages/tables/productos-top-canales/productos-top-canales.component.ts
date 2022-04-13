import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-top-canales',
  templateUrl: './productos-top-canales.component.html',
  styleUrls: ['./productos-top-canales.component.scss']
})
export class ProductosTopCanalesComponent implements OnInit {

  source: any
  canal: number
  canales = [
    {value: 1, name: 'Orion91'}, {value: 2, name: 'Amazon'}, {value: 3, name: 'Makro'}, {value: 4, name: 'ManoMano'},{value: 5, name: 'AliExpress'},
    {value: 6, name: 'Worten'}, {value: 7, name: 'Carrefour'}, {value: 8, name: 'Embargos'}, {value: 9, name: 'MequedoUno'}, {value: 10, name: 'Sprinter'},
    {value: 11, name: 'Bulevip'},{value: 12, name: 'Venca'}, {value: 13, name: 'Fnac'}, {value: 14, name: 'Wish'}, {value: 15, name: 'MediaMarkt'}
  ]

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosTopHoy().subscribe(data=>{
      this.source = data
    })
  }

  seleccionCanal(event){
    this.canal = event
  }

  buscarSeleccion(dias: number){

    //Hoy
    if(dias == 0){
      if(this.canal != 1 && this.canal != 14){
        this.authSvc.productosTopCanales(this.canal).subscribe(data=>{
          this.source = data
        })
      }

      if(this.canal == 1){
        this.authSvc.productosTopCanalOrion().subscribe(data=>{
          this.source = data
        })
      }

      if(this.canal == 14){
        this.authSvc.productosTopCanalWish().subscribe(data=>{
          this.source = data
        })
      }
    }

    //15 DIAS
    if(dias == 15){
      if(this.canal != 1 && this.canal != 14){
        this.authSvc.productosTopCanales15Dias(this.canal).subscribe(data=>{
          this.source = data
        })
      }

      if(this.canal == 1){
        this.authSvc.productosTopCanalOrion15Dias().subscribe(data=>{
          this.source = data
        })
      }

      if(this.canal == 14){
        this.authSvc.productosTopCanalWish15Dias().subscribe(data=>{
          this.source = data
        })
      }
    }

    //30 DIAS
    if(dias == 30){
      if(this.canal != 1 && this.canal != 14){
        this.authSvc.productosTopCanales30Dias(this.canal).subscribe(data=>{
          this.source = data
        })
      }

      if(this.canal == 1){
        this.authSvc.productosTopCanalOrion30Dias().subscribe(data=>{
          this.source = data
        })
      }

      if(this.canal == 14){
        this.authSvc.productosTopCanalWish30Dias().subscribe(data=>{
          this.source = data
        })
      }
    }

  }


  config = {
    actions: false,
    columns: {
      id_product: {
        title: 'Id Producto',
        type: 'number'
      },
      imagen: {
        title: 'Imagen',
        type: 'html',
        valuePrepareFunction: (value) =>{
          return "<img src='"+ value + "'>"
        }
      },
      name:{
        title: 'Producto',
        type: 'string'
      },
      nombre_cat:{
        title: 'Categoría',
        type: 'string'
      },
      suma_cantidad: {
        title: 'Cantidad',
        type: 'number'
      },
      suma_importes:{
        title: 'Total',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      }
    },
  };

}
