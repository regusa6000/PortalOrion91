import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-sin-categoria-predeterminada',
  templateUrl: './productos-sin-categoria-predeterminada.component.html',
  styleUrls: ['./productos-sin-categoria-predeterminada.component.scss']
})
export class ProductosSinCategoriaPredeterminadaComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.productosSinCategoriaPredeterminada().subscribe(data=>{
      this.source = data
    })
  }

}
