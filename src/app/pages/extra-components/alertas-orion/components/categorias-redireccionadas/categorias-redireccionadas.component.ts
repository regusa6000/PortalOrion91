import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-categorias-redireccionadas',
  templateUrl: './categorias-redireccionadas.component.html',
  styleUrls: ['./categorias-redireccionadas.component.scss']
})
export class CategoriasRedireccionadasComponent implements OnInit {

  redireccionadas: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.categoriasRedireccionadas().subscribe(data=>{
      this.redireccionadas = data
    })
  }

}
