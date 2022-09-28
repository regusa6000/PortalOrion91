import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-pedidos-vendor',
  templateUrl: './pedidos-vendor.component.html',
  styleUrls: ['./pedidos-vendor.component.scss']
})
export class PedidosVendorComponent implements OnInit {

  pedidosVendor: any
  hideme = [];
  Index: any;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.pedidosAmazonVendor().subscribe(data=>{
      this.pedidosVendor = data
    })
  }

  showLinea(index) {
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }

}
