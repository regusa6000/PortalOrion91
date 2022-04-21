import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-producto-con-pocas-imagenes',
  templateUrl: './producto-con-pocas-imagenes.component.html',
  styleUrls: ['./producto-con-pocas-imagenes.component.scss']
})
export class ProductoConPocasImagenesComponent implements OnInit {

  source: any
  loading = false;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.productosConPocasImagenes().subscribe(data=>{
      this.source = data
    })
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 4000);
  }

  config = {
    actions: false,
    columns: {
      id_product: {
        title: 'Id Producto',
        type: 'number',
      },
      imagen: {
        title: 'Imagen',
        type: 'html',
        valuePrepareFunction: (value) =>{
          return "<img src='"+ value + "'>"
        }
      },
      producto: {
        title: 'Producto',
        type: 'string'
      },
      valorAtt: {
        title: 'Valor Atributo',
        type: 'string',
      },
      contador:{
        title: 'Nímero de Imágenes',
        type: 'number'
      }
    },
  };
}
