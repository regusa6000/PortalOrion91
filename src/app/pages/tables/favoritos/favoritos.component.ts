import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarTopFavoritos().subscribe(data=>{
      this.source = data
    })
  }

  config = {
    pager: { display: false },
    actions: false,
    columns:{
      idx:{
        title: 'Posición',
        type: 'text',
        valuePrepareFunction:(value,row,cell) =>{
          return `${cell.row.index + 1 +'º'}`;
        }
      },
      id_product:{
        title:'Id Producto',
        type: 'number'
      },
      name:{
        title: 'Producto',
        type: 'string'
      },
      nFavoritos:{
        title: 'Cantidad de Favoritos',
        type: 'number'
      }
    }
  }

}
