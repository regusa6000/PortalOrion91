import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-pre-compra',
  templateUrl: './pre-compra.component.html',
  styleUrls: ['./pre-compra.component.scss']
})
export class PreCompraComponent implements OnInit {

  source: any;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarTablaPreCompra().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    actions: false,
    columns: {
      id_product: {
        title: 'IdProducto',
        type: 'number',
      },
      out_of_stock: {
        title: 'Agotado',
        type: 'string',
      },
      name: {
        title: 'Nombre',
        type: 'string',
      },
      available_later: {
        title: 'Disponible Luego',
        type: 'string',
      },
      quantity: {
        title: 'Cantidad',
        type: 'number',
      },
    },
  };

}
