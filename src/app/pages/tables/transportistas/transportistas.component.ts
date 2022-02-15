import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-transportistas',
  templateUrl: './transportistas.component.html',
  styleUrls: ['./transportistas.component.scss']
})
export class TransportistasComponent implements OnInit {

  source: any
  nameTransportistas: any
  transportistaPaack: string = 'paack'
  idPaack: number = 227

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarTablaTransportistas().subscribe(data=>{
      this.source = data
    })
    this.authSvc.cargarComboTransportistaName().subscribe(data=>{
      this.nameTransportistas = data
    })
  }

  buscarTransportista(event){
    this.authSvc.cargarTransportistaName(event).subscribe(data=>{
      this.source = ''
      this.source = data
    })
    console.log(event)
  }

  config = {
    actions: false,
    columns: {
      id_order: {
        title: 'Order Id',
        type: 'number',
      },
      reference: {
        title: 'Referencia',
        type: 'number',
      },
      name: {
        title: 'Empresa',
        type: 'string',
      },
      origenPed: {
        title: 'Origen Pedido',
        type: 'string',
      },
      fechaCreado: {
        title: 'Fecha Creado',
        type: 'string',
      },
      fechaEnviado:{
        title: 'Fecha Enviado',
        type: 'string'
      },
      horasHastaEnviado:{
        title: 'Horas Hasta Envio',
        type: 'number'
      },
      fechaEntregado:{
        title: 'Fecha Entregado',
        type: 'string'
      },
      horasHastaEntregado:{
        title: 'Horas Hasta Entrega',
        type: 'number'
      },
      PreCompra:{
        title: 'Pre Compra',
        type: 'number'
      }
    },
  };

}
