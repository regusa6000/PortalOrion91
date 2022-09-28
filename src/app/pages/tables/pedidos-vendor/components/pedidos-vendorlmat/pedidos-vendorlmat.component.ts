import { Component,Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pedidos-vendorlmat',
  templateUrl: './pedidos-vendorlmat.component.html',
  styleUrls: ['./pedidos-vendorlmat.component.scss']
})
export class PedidosVendorlmatComponent implements OnInit {

  lmat: any
  itemId: any
  stock: any
  description: any
  lmatCount: any
  arrayLmat: any = []


  @Input() idProductVendor: any


  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {

    let json = {'referencia': this.idProductVendor}
    this.authSvc.pedidosAmazonVendorLmat(json).subscribe(data=>{
      this.itemId = data['details'].itemid
      this.stock = data['details'].stock
      this.description = data['details'].descripcion
      this.lmatCount = data['details'].cantidad
      this.lmat = data['details'].lmat

      this.arrayLmat = data['details'].lineas_lmat
      console.log(this.arrayLmat)

      // console.log(this.array0Lmat)
      // console.log(this.lmat)
      // console.log(this.arrayLmat)
    })
  }

}
