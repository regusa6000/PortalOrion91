import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-top-hace30-dias',
  templateUrl: './productos-top-hace30-dias.component.html',
  styleUrls: ['./productos-top-hace30-dias.component.scss']
})
export class ProductosTopHace30DiasComponent implements OnInit {

  productosTop: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosTopUltimos30Dias().subscribe(data=>{
      this.productosTop = ''
      this.productosTop = data
    })
  }

}
