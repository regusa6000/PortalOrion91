import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-precios-makro-rangos',
  templateUrl: './precios-makro-rangos.component.html',
  styleUrls: ['./precios-makro-rangos.component.scss']
})
export class PreciosMakroRangosComponent implements OnInit {

  productosPublicados: any
  hideme = [];
  formulario = [];
  Index: any;

  constructor(private authSvc: AuthService,private toastrService: NbToastrService) { }

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

  showFormulario(index) {
    this.formulario[index] = !this.formulario[index];
    this.Index = index;
  }


}
