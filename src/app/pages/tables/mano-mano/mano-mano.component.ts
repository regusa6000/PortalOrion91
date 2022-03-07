import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-mano-mano',
  templateUrl: './mano-mano.component.html',
  styleUrls: ['./mano-mano.component.scss']
})
export class ManoManoComponent implements OnInit {

  manoAmano: any;
  option;
  options = [
    { value: 'This is value 1', label: 'Option 1' },
    { value: 'This is value 2', label: 'Option 2' },
    { value: 'This is value 3', label: 'Option 3' },
    { value: 'This is value 4', label: 'Option 4' },
  ];


  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarTablaDivision().subscribe(data=>{
      this.manoAmano = data
      console.log(data)
    })
  }

  avanzado(value: number){
    switch(value){
      case 1:
        this.authSvc.cargarTablaPrimeraDivision().subscribe(data=>{
          this.manoAmano = ""
          this.manoAmano = data
        })
        break
      case 2:
        this.authSvc.cargarTablaSegundaDivision().subscribe(data=>{
          this.manoAmano = ""
          this.manoAmano = data
        })
        break
      case 3:
        this.authSvc.cargarTablaDivision().subscribe(data=>{
          this.manoAmano = ""
          this.manoAmano = data
        })
        break
      case 4:
        this.authSvc.cargarTablaTerceraDivision().subscribe(data=>{
          this.manoAmano = ""
          this.manoAmano = data
        })
        break
      case 5:
        this.authSvc.cargarTablaCuartaDivision().subscribe(data=>{
          this.manoAmano = ""
          this.manoAmano = data
        })
        break
      case 7:
        this.authSvc.cargarTablaSextaDivision().subscribe(data=>{
          this.manoAmano = ""
          this.manoAmano = data
        })
        break
      case 8:
        this.authSvc.cargarTablaSeptimaDivision().subscribe(data=>{
          this.manoAmano = ""
          this.manoAmano = data
        })
        break
      case 9:
      this.authSvc.cargarTablaOctavaDivision().subscribe(data=>{
        this.manoAmano = ""
        this.manoAmano = data
      })
        break
    }
  }

  config = {
    actions: false,
    columns: {
      id_product: {
        title: 'Product Id',
        type: 'number',
      },
      name: {
        title: 'Producto',
        type: 'string',
      },
      pricePresta: {
        title: 'Precio Orion91',
        type: 'number',
      },
      additionalShippingCostPresta: {
        title: 'Coste de Envio Orion91',
        type: 'number',
      },
      totalOrion: {
        title: 'Total Orion',
        type: 'number',
      },
      division:{
        title: 'Indice',
        type: 'number'
      },
      price:{
        title: 'Precio ManoMano',
        type: 'number'
      },
      normal_shipping_price:{
        title: 'Precio de Envio ManoMano',
        type: 'number'
      },
      totalManoMano:{
        title: 'Total ManoMano',
        type: 'number'
      },
    },
  };


}
