import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-porcentaje-enviados',
  templateUrl: './porcentaje-enviados.component.html',
  styleUrls: ['./porcentaje-enviados.component.scss']
})
export class PorcentajeEnviadosComponent implements OnInit {

  source: any
  chart: Chart | undefined;
  arrayFechas: any
  loading = false;

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.toggleLoadingAnimation()
    this.authSvc.porcentajeTransportistas().subscribe(data=>{
      this.source = data

      let fechas = this.fechas(this.source);

    setTimeout(() => {
      this.datosTransportistas(this.source,fechas)
     }, 10000);

    })
  }

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => this.loading = false, 18000);
  }

  config = {
    actions: false,
    columns: {
      date: {
        title: 'Fecha',
        type: 'number',
      },
      week: {
        title: 'Semana',
        type: 'number',
      },
      total: {
        title: 'Total Pedidos',
        type: 'number',
      },
      paack: {
        title: 'Paack',
        type: 'number',
      },
      gls: {
        title: 'Gls',
        type: 'number',
      },
      transaher: {
        title: 'Transaher',
        type: 'number'
      },
      Tolosa:{
        title: 'Tolosa',
        type: 'number'
      },
      Envialia:{
        title: 'Envialia',
        type: 'number'
      },
      Tipsa:{
        title: 'Tipsa',
        type: 'number'
      },
      Seur:{
        title: 'Seur',
        type: 'number'
      }
    },
  };

  fechas(array: any){
    let fechas = [];

    for(let a = 0 ; a < array.length ; a++){
        fechas.push(array[a]['date'])
    }
    return fechas;
  }

  datosTransportistas(array: any, fechas: any){

    //Datos Paack
    let datosPaack = [];
    for(let a = 0 ; a < array.length ; a++){
      datosPaack.push(array[a]['paack'])
    }

    //Datos GLS
    let datosGls = [];
    for(let b = 0 ; b < array.length ; b++){
      datosGls.push(array[b]['gls'])
    }

    //Datos Transaher
    let datosTransaher = []
    for(let b = 0 ; b < array.length ; b++){
      datosTransaher.push(array[b]['transaher'])
    }


    //Datos Tolosa
    let datosTolosa = [];
    for(let c = 0 ; c < array.length ; c++){
      datosTolosa.push(array[c]['Tolosa'])
    }

    //Datos Envialia
    let datosEnvialia = [];
    for(let d = 0 ; d < array.length ; d++){
      datosEnvialia.push(array[d]['Envialia'])
    }

    //Datos Tipsa
    let datosTipsa = [];
    for(let e = 0 ; e < array.length ; e++){
      datosTipsa.push(array[e]['Tipsa'])
    }

    //Datos Seur
    let datosSeur = [];
    for(let f = 0 ; f < array.length ; f++){
      datosSeur.push(array[f]['Seur'])
    }

    let datosTotal = [];
    for(let g = 0 ; g < array.length ; g++){
      datosTotal.push(array[g]['total'])
    }

    datosTotal.reverse()
    datosPaack.reverse()
    datosGls.reverse()
    datosTransaher.reverse()
    datosTolosa.reverse()
    datosEnvialia.reverse()
    datosTipsa.reverse()
    datosSeur.reverse()
    fechas.reverse()

    this.grafico(datosTotal,datosPaack,datosGls,datosTransaher,datosTolosa,datosEnvialia,datosTipsa,datosSeur,fechas)

  }

  grafico(arrayTotal: any,arrayPaack: any, arrayGls: any, arrayTransaher: any, arrayTolosa: any, arrayEnvialia: any, arrayTipsa: any, arraySeur: any, arrayFechas: any){

    this.chart = new Chart('canvas',{
      type: 'line',
      data: {
        labels: arrayFechas,
        datasets: [
          {
            label: 'Total',
            data: arrayTotal,
            borderColor: 'black',
            borderWidth: 3
          },
          {
            label: 'Paack',
            data: arrayPaack,
            borderColor: 'black',
            borderWidth: 3
          },
          {
            label: 'Gls',
            data: arrayGls,
            borderColor: 'blue',
            borderWidth: 3
          },
          {
            label: 'Transaher',
            data: arrayTransaher,
            borderColor: 'silver',
            borderWidth: 3
          },
          {
            label: 'Tolosa',
            data: arrayTolosa,
            borderColor: 'red',
            borderWidth: 3
          },
          {
            label: 'Envialia',
            data: arrayEnvialia,
            borderColor: 'green',
            borderWidth: 3
          },
          {
            label: 'Tipsa',
            data: arrayTipsa,
            borderColor: 'pink',
            borderWidth: 3
          },
          {
            label: 'Seur',
            data: arraySeur,
            borderColor: 'gray',
            borderWidth: 3
          }
        ]
      }
    })

  }

}
