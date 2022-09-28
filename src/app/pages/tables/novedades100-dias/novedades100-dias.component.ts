import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-novedades100-dias',
  templateUrl: './novedades100-dias.component.html',
  styleUrls: ['./novedades100-dias.component.scss']
})
export class Novedades100DiasComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.novedadesUltimos100dias().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    pager: { display: false },
    actions: false,
    columns: {
      id_product: {
        title: 'Id Producto',
        type: 'string'
      },
      itemid: {
        title: 'IdAx',
        type: 'string',
      },
      ean13:{
        title: 'Ean13',
        type: 'string'
      },
      reference:{
        title: 'Referencia',
        type: 'string'
      },
      name: {
        title: 'Producto',
        type: 'string'
      },
      diasDeAlta: {
        title: 'Días Alta',
        type: 'string'
      },
      fechaAlta: {
        title: 'Fecha de Alta',
        type: 'string'
      }
    },
  };

}
