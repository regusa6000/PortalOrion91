import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'ngx-categorias-por-meses',
  templateUrl: './categorias-por-meses.component.html',
  styleUrls: ['./categorias-por-meses.component.scss']
})
export class CategoriasPorMesesComponent implements OnInit {

  chart: Chart | undefined;
  listadoCategorias: any
  numerosCategorias: any
  arrayCategorias: any = []
  hideme = [];
  Index: any;

  tiendas = [
    {'variable':1,'name':'Orion91'},
    {'variable':2,'name':'ManoMano'},
    {'variable':3,'name':'Carrefour'},
    {'variable':4,'name':'Ali Express'},
    {'variable':5,'name':'Amazon'},
    {'variable':6,'name':'Grupon'},
    {'variable':7,'name':'Embargos'},
    {'variable':8,'name':'MequedoUno'},
    {'variable':9,'name':'Fnac'},
    {'variable':10,'name':'Wish'},
    {'variable':11,'name':'Makro'},
    {'variable':12,'name':'Pc Componentes'},
    {'variable':13,'name':'Sprinter'},
  ]

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.categoriasPorMeses().subscribe(data=>{
      this.listadoCategorias = data
    })
    this.authSvc.categoriasGeneral().subscribe(data=>{
      this.numerosCategorias = data

      for(let a = 0; a < this.numerosCategorias.length; a++){
        this.arrayCategorias.push(this.numerosCategorias[a])
      }

      console.log(this.arrayCategorias)

    })

    setTimeout(() => {
      this.buscarCatGeneral()
     }, 20000);

  }

  buscarCatGeneral() {

    console.log(this.arrayCategorias)

    for(let b = 0 ; b < this.arrayCategorias.length ; b++){
      this.authSvc.idCategoriaPorMeses(this.arrayCategorias[b].id_category).subscribe(data=>{
        this.grafico(data);
      })
    }
  }

  showLinea(index) {
    this.hideme[index] = !this.hideme[index];
    this.Index = index;
  }

  buscarCatPorTienda(variable: number){

    for(let b = 0 ; b < this.arrayCategorias.length ; b++){
        this.authSvc.categoriaIdPorMesesPorTienda(variable,this.arrayCategorias[b].id_category).subscribe(data=>{
          this.grafico(data);
        })
    }

  }

  buscarCatPorTiendaOrion(){

    for(let b = 0 ; b < this.arrayCategorias.length ; b++){
      this.authSvc.categoriaPorTiendaOrionPorIdCategoria(this.arrayCategorias[b].id_category).subscribe(data=>{
        this.grafico(data)
      })
    }

  }

  buscarCatPorTiendaWish(){
    for(let b = 0 ; b < this.arrayCategorias.length ; b++){
      this.authSvc.categoriaPorTiendaWishPorIdCategoria(this.arrayCategorias[b].id_category).subscribe(data=>{
          this.grafico(data);
      })
    }
  }

  buscarTienda(variable: number){

    this.numerosCategorias = ''

    if(variable != 1 && variable != 10){

      this.authSvc.categoriaPorTienda(variable).subscribe(data=>{
        this.listadoCategorias = ''
        this.listadoCategorias = data
        console.log(this.listadoCategorias)
      })


      this.authSvc.categoriasGeneral().subscribe(data=>{
        this.numerosCategorias = data
        this.arrayCategorias = []

        //RECORREMOS TODOS LOS IDS CATEGORY PARA PODER CREAR CHARTJS POR CADA UNO
        for(let a = 0 ; a < this.numerosCategorias.length; a++){
          this.arrayCategorias.push(this.numerosCategorias[a])
        }
      })

      setTimeout(() => {
        this.buscarCatPorTienda(variable)
      }, 20000);

    }else{

      if(variable == 1){

        this.authSvc.categoriasPorTiendaOrion().subscribe(data=>{
          this.listadoCategorias = ''
          this.listadoCategorias = data
        })

        this.authSvc.categoriasGeneral().subscribe(data=>{
          this.numerosCategorias = data
          this.arrayCategorias = []

          //RECORREMOS TODOS LOS IDS CATEGORY PARA PODER CREAR CHARTJS POR CADA UNO
          for(let b = 0 ; b < this.numerosCategorias.length; b++){
            this.arrayCategorias.push(this.numerosCategorias[b])
          }

          console.log(this.arrayCategorias)

          setTimeout(() => {
            this.buscarCatPorTiendaOrion()
          }, 20000);

        })
      }else{
        if(variable == 10){

          this.authSvc.CategoriasPorTiendaWish().subscribe(data=>{
              this.listadoCategorias = ''
              this.listadoCategorias = data
          })

          this.authSvc.categoriasGeneral().subscribe(data=>{
            this.numerosCategorias = data
            this.arrayCategorias = []

            //RECORREMOS TODOS LOS IDS CATEGORY PARA PODER CREAR CHARTJS POR CADA UNO
            for(let a = 0 ; a < this.numerosCategorias.length; a++){
              this.arrayCategorias.push(this.numerosCategorias[a])
            }

            setTimeout(() => {
              this.buscarCatPorTiendaWish()
            }, 20000);

          })

        }
      }
    }

  }

  //PARTE DE CHARTJS
  grafico( array: any){
    // console.log(array)
    this.chart = new Chart('canvas-'+array[0].id_category,{
      type: 'line',
      data: {
          labels: ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'],
          datasets: [
            {
              label: '2022',
              data: [array[0].ENERO,array[0].FEBRERO,array[0].MARZO,array[0].ABRIL,array[0].MAYO,array[0].JUNIO,
              array[0].JULIO,array[0].AGOSTO,array[0].SEPTIEMBRE,array[0].OCTUBRE,array[0].NOVIEMBRE,array[0].DICIEMBRE],
              borderColor: 'black',
              borderWidth: 3
            },
            {
              label: '2021',
              data: [array[0].ENERO2021,array[0].FEBRERO2021,array[0].MARZO2021,array[0].ABRIL2021,array[0].MAYO2021,array[0].JUNIO2021,
              array[0].JULIO2021,array[0].AGOSTO2021,array[0].SEPTIEMBRE2021,array[0].OCTUBRE2021,array[0].NOVIEMBRE2021,array[0].DICIEMBRE2021],
              borderColor: 'blue',
              borderWidth: 3
            },
            {
              label: '2020',
              data: [array[0].ENERO2020,array[0].FEBRERO2020,array[0].MARZO2020,array[0].ABRIL2020,array[0].MAYO2020,array[0].JUNIO2020,
              array[0].JULIO2020,array[0].AGOSTO2020,array[0].SEPTIEMBRE2020,array[0].OCTUBRE2020,array[0].NOVIEMBRE2020,array[0].DICIEMBRE2020],
              borderColor: 'red',
              borderWidth: 3
            }
        ]
      },
    })

  }


}
