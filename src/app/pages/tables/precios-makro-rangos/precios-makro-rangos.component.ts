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
  rangos: number
  stock: number
  loading = false;

  comboRangos = [
    {
      value: 1,
      name: 'Con Rangos'
    },
    {
      value: 2,
      name: 'Sin Rangos'
    }
  ]

  comboCantidadStock = [
    {
      value: 1,
      name: 'Con Stock'
    },
    {
      value: 2,
      name: 'Sin Stock'
    }
  ]

  constructor(private authSvc: AuthService,private toastrService: NbToastrService) { }

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.totalProductosPublicadosMakro().subscribe(data=>{
      this.productosPublicados = data
      console.log(this.productosPublicados)
    })
  }

  seleccionRango(event){
    this.rangos = event
    // console.log(event)
  }

  seleccionStock(event){
    this.stock = event
    // console.log(event)
  }

  buscar(){

    if(this.rangos == 1 && this.stock == 1){
      this.authSvc.productosPublicadosMakroConRangoYConStock().subscribe(data=>{
        this.productosPublicados = ""
        this.productosPublicados = data
      })
    }

    if(this.rangos == 1 && this.stock == 2){
      this.authSvc.productosPublicadosMakroConRangoYSinStock().subscribe(data=>{
        this.productosPublicados = ""
        this.productosPublicados = data
      })
    }

    if(this.rangos == 2 && this.stock == 1){
      this.authSvc.productosPublicadosMakroSinRangoYConStock().subscribe(data=>{
        this.productosPublicados = ""
        this.productosPublicados = data
      })
    }

    if(this.rangos == 2 && this.stock == 2){
      this.authSvc.productosPublicadosMakroSinRangoYSinStock().subscribe(data=>{
        this.productosPublicados = ""
        this.productosPublicados = data
      })
    }

    console.log('Rangos value: ' + this.rangos + ' , Stock value: ' +this.stock)
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 45000);
  }

  volverAbuscar(){
    this.rangos = 0
    this.stock = 0
    this.ngOnInit()
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
