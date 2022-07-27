import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-categorias-sin-facetas',
  templateUrl: './categorias-sin-facetas.component.html',
  styleUrls: ['./categorias-sin-facetas.component.scss']
})
export class CategoriasSinFacetasComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.categoriasSinFacetas().subscribe(data=>{
      this.source = data
    })

  }

}
