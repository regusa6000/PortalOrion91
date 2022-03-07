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
    actions: false,
    columns: {
      id_product: {
        title: 'Product Id',
        type: 'number',
      },
      id_product_attribute: {
        title: 'Atributo Id',
        type: 'number',
      },
      ean13: {
        title: 'Ean13',
        type: 'number',
      },
      reference: {
        title: 'Referencia',
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
        title: 'Stock',
        type: 'number'
      },
      ud_30_dias:{
        title: 'Ud. 30',
        type: 'number'
      },
      m_30:{
        title: 'Md. 30',
        type: 'number'
      },
      rotura_en:{
        title: 'Rotura en dias:',
        type: 'number'
      }
    },
  };

}
