import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-devoluciones',
  templateUrl: './devoluciones.component.html',
  styleUrls: ['./devoluciones.component.scss']
})
export class DevolucionesComponent implements OnInit {

  valor: any
  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  buscador(){
    let json = {'nombre': this.valor}

    this.authSvc.buscarDevoluciones(json).subscribe(data=>{
      this.source = ''
      this.source = data
      this.valor = ''
    })

  }

  config = {
    pager: { display: false },
    actions: false,
    columns: {
      reference: {
        title: 'Pedido',
        type: 'string'
      },
      origen: {
        title: 'Canal/Payment',
        type: 'string',
      },
      id_origen:{
        title: 'Origen Pedido',
        type: 'string'
      },
      Cliente:{
        title: 'Cliente',
        type: 'string'
      },
      name: {
        title: 'País',
        type: 'string'
      },
      fecha:{
        title: 'Fecha Compra',
        type: 'string'
      }
    },
  };

}
