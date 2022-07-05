import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-cupones-descuentos',
  templateUrl: './cupones-descuentos.component.html',
  styleUrls: ['./cupones-descuentos.component.scss']
})
export class CuponesDescuentosComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {

    this.authSvc.cuponesDescuento().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    pager: { display: false },
    actions: false,
    columns: {
      id_cart_rule: {
        title: 'id Descuento',
        type: 'number',
      },
      code: {
        title: 'Código',
        type: 'string',
      },
      name: {
        title: 'Titulo Descuento',
        type: 'string',
      },
      usado:{
        title: 'Usado',
        type: 'number'
      },
      descontado: {
        title: 'Descontado',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      total_pagado: {
        title: 'Total Pagado',
        type: 'number',
        valuePrepareFunction: (value) =>{
          return Intl.NumberFormat('de-DE',{style:'currency',currency: 'EUR'}).format(value)
        }
      },
      date_from: {
        title: 'Date From',
        type: 'number',
      },
      date_to: {
        title: 'Date To',
        type: 'number',
      },
    },
  };

}
