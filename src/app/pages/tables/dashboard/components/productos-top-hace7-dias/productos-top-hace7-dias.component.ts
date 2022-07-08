import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-top-hace7-dias',
  templateUrl: './productos-top-hace7-dias.component.html',
  styleUrls: ['./productos-top-hace7-dias.component.scss']
})
export class ProductosTopHace7DiasComponent implements OnInit {

  productosTop: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosTopUltimos7Dias().subscribe(data=>{
      this.productosTop = ''
      this.productosTop = data
    })
  }

}
