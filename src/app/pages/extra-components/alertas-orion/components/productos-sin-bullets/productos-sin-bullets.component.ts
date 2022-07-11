import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-sin-bullets',
  templateUrl: './productos-sin-bullets.component.html',
  styleUrls: ['./productos-sin-bullets.component.scss']
})
export class ProductosSinBulletsComponent implements OnInit {

  source: any = []

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.productosSinBullets().subscribe(data=>{
      this.source = data
    })
  }

}
