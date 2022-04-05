import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-top-hoy',
  templateUrl: './productos-top-hoy.component.html',
  styleUrls: ['./productos-top-hoy.component.scss']
})
export class ProductosTopHoyComponent implements OnInit {

  productosTop: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosTopHoy().subscribe(data=>{
      this.productosTop = ''
      this.productosTop = data
    })
  }

}
