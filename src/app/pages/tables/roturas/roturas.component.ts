import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-roturas',
  templateUrl: './roturas.component.html',
  styleUrls: ['./roturas.component.scss']
})
export class RoturasComponent implements OnInit {

  constructor(public authSvc: AuthService) { }

  source: any
  loading = false;

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.controlRoturaStock().subscribe(data=>{
      this.source = data
    })
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 5000);
  }

  config = {
    pager: { display: false },
    actions: false,
    columns: {
      id_product: {
        title: 'Product Id',
        type: 'number',
      },
      itemid:{
        title: 'Id Ax',
        type: 'string'
      },
      imagen: {
        title: 'Imagen',
        type: 'html',
        valuePrepareFunction: (value) =>{
          return "<img src='"+ value + "'>"
        }
      },
      ean13: {
        title: 'Ean13',
        type: 'number',
      },
      producto: {
        title: 'Producto',
        type: 'string',
      },
      atributo:{
        title: 'Atributo',
        type: 'string'
      },
      valor_att:{
        title: 'Valor Atributo',
        type: 'string'
      },
      stock:{
        title: 'Stock actual',
        type: 'number'
      },
      ud_30_dias:{
        title: 'Ventas 30 días',
        type: 'number'
      },
      m_30:{
        title: 'Media 30 días',
        type: 'number'
      },
      rotura_en:{
        title: 'Rotura en dias:',
        type: 'number'
      },
      ud_60_dias:{
        title: 'Ventas 60 días',
        type: 'number'
      },
      m_60:{
        title: 'Media 60',
        type: 'number'
      },
      rotura_en_60:{
        title: 'Rotura en dias(60):',
        type: 'number'
      }
    },
  };

}
