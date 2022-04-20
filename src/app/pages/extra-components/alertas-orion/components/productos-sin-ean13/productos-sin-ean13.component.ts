import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-sin-ean13',
  templateUrl: './productos-sin-ean13.component.html',
  styleUrls: ['./productos-sin-ean13.component.scss']
})
export class ProductosSinEan13Component implements OnInit {

  productos: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.productosSinEan13().subscribe(data=>{
      this.productos = data
    })
  }

}
