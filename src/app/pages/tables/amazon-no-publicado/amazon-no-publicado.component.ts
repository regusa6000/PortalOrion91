import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-amazon-no-publicado',
  templateUrl: './amazon-no-publicado.component.html',
  styleUrls: ['./amazon-no-publicado.component.scss']
})
export class AmazonNoPublicadoComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosNoPublicadosAmazonMP().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    actions: false,
    columns: {
      id_product: {
        title: 'Id Producto',
        type: 'number',
      },
      id_product_attribute: {
        title: 'Id Atibuto',
        type: 'number',
      },
      nombrePs: {
        title: 'Producto',
        type: 'string',
      },
      atributo:{
        title: 'Atributo',
        type: 'string'
      },
      mpAmazon: {
        title: 'MP Amazon',
        type: 'string',
      },
      activoEnPs: {
        title: 'Activo PS',
        type: 'string',
      },
      estadoEnAmazon:{
        title: 'Estado Amazon',
        type: 'string'
      },
      asin1:{
        title: 'Asin1',
        type: 'string'
      },
      ean13Amazon:{
        title: 'Ean13(Amazon)',
        type: 'string'
      },
      stockAmazon:{
          title: 'Stock(Amazon)',
          type: 'number'
      },
      stockPs:{
        title: 'Stock(Orion91)',
        type: 'number'
      }
    },
  };

}
