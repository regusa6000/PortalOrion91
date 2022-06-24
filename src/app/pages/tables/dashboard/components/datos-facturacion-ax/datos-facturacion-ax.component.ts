import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-datos-facturacion-ax',
  templateUrl: './datos-facturacion-ax.component.html',
  styleUrls: ['./datos-facturacion-ax.component.scss']
})
export class DatosFacturacionAxComponent implements OnInit {

  source: any = []

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.datosFacturacionAx().subscribe(data => {
      this.source = data
    })
  }

}
