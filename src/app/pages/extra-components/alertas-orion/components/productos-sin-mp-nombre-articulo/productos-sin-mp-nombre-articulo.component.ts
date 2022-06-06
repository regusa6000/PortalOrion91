import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-sin-mp-nombre-articulo',
  templateUrl: './productos-sin-mp-nombre-articulo.component.html',
  styleUrls: ['./productos-sin-mp-nombre-articulo.component.scss']
})
export class ProductosSinMpNombreArticuloComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.productosSinMpNombreArticulo().subscribe(data=>{
      this.source = data
    })
  }

}
