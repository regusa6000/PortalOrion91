import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-precios-cambiados',
  templateUrl: './precios-cambiados.component.html',
  styleUrls: ['./precios-cambiados.component.scss']
})
export class PreciosCambiadosComponent implements OnInit {

  preciosAx: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);

  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.preciosCambiados().subscribe(data=>{
      this.preciosAx = data
    })
  }

}
