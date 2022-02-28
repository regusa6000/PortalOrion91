import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-categoria-producto',
  templateUrl: './categoria-producto.component.html',
  styleUrls: ['./categoria-producto.component.scss']
})
export class CategoriaProductoComponent implements OnInit {

  listadoCategorias: any
  hideme = [];
  Index: any;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.categoriasProductosName().subscribe(data=>{
      this.listadoCategorias = data
      console.log(this.listadoCategorias)
    })
  }

  showLinea(index) {
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }

}
