import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-precio-base-menor-aprecio-oferta',
  templateUrl: './precio-base-menor-aprecio-oferta.component.html',
  styleUrls: ['./precio-base-menor-aprecio-oferta.component.scss']
})
export class PrecioBaseMenorAPrecioOfertaComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.precioBaseMenorPrecioOferta().subscribe(data=>{
      this.source = data
    })
  }

}
