import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-nombre-mp',
  templateUrl: './productos-nombre-mp.component.html',
  styleUrls: ['./productos-nombre-mp.component.scss']
})
export class ProductosNombreMpComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosNombreMp().subscribe(data=>{
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
      itemID: {
        title: 'Id Ax',
        type: 'string'
      },
      ean13: {
        title: 'Ean13',
        type: 'string',
      },
      name:{
        title: 'Producto',
        type: 'string'
      },
      feature:{
        title: 'Feature',
        type: 'number'
      },
      MPNombreArticulo:{
        title: 'MP Nombre Producto',
        type: 'number'
      }
    },
  };

}
