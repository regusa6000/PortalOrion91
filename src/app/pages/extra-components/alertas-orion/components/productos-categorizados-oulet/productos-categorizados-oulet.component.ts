import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-productos-categorizados-oulet',
  templateUrl: './productos-categorizados-oulet.component.html',
  styleUrls: ['./productos-categorizados-oulet.component.scss']
})
export class ProductosCategorizadosOuletComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.productosCategorizadosOulet().subscribe(data=>{
      this.source = data
    })
  }

}
