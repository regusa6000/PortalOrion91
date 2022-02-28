import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-categorias-por-meses',
  templateUrl: './categorias-por-meses.component.html',
  styleUrls: ['./categorias-por-meses.component.scss']
})
export class CategoriasPorMesesComponent implements OnInit {

  listadoCategorias: any
  hideme = [];
  Index: any;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.categoriasPorMeses().subscribe(data=>{
      this.listadoCategorias = data
    })
  }

  showLinea(index) {
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }

  // showFormulario(index) {
  //   this.formulario[index] = !this.formulario[index];
  //   this.Index = index;
  // }

}
