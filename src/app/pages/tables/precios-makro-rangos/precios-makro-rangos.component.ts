import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-precios-makro-rangos',
  templateUrl: './precios-makro-rangos.component.html',
  styleUrls: ['./precios-makro-rangos.component.scss']
})
export class PreciosMakroRangosComponent implements OnInit {

  productosPublicados: any
  hideme = [];
  Index: any;
  rangosProductos: any

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.totalProductosPublicadosMakro().subscribe(data=>{
      this.productosPublicados = data
      console.log(this.productosPublicados)
    })
  }

  showLinea(index) {
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }

  buscarRangos(ean13: number){
    this.authSvc.listaDeRangosMakroPorEan13(ean13).subscribe(data=>{
      this.rangosProductos = data
      console.log(this.rangosProductos)
    })
  }

}
