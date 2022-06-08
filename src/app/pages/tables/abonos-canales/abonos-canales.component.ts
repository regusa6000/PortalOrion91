import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import * as moment from 'moment';


@Component({
  selector: 'ngx-abonos-canales',
  templateUrl: './abonos-canales.component.html',
  styleUrls: ['./abonos-canales.component.scss']
})
export class AbonosCanalesComponent implements OnInit {

  fechaInicio: any
  fechaFin: any
  datosGrafico: any
  arrayGrafico: any = []

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  buscar(){
    let json = {'fechaInicio': this.fechaInicio, 'fechaFin': this.fechaFin}

    this.authSvc.graficoAbonosCanales(json).subscribe(data=>{
      this.datosGrafico = data
      this.cargarGrafico(data)
      console.log(this.datosGrafico)
    })
  }

  cambioRango(event){
    if (event.start) this.fechaInicio = moment(event.start).format('YYYY-MM-DD');
    if (event.end) this.fechaFin = moment(event.end).format('YYYY-MM-DD');
    console.log(this.fechaInicio)
    console.log(this.fechaFin)
  }

  cargarGrafico(array: any){

    console.log(array)
    console.log(array[0])
    console.log(array[0].precioFinal)
    console.log(array[0].tienda)

    for(let a = 0 ; a < array.length ; a++){
      let json = {value: array[a].precioFinal, name: array[a].tienda}
      this.arrayGrafico.push(json)
    }

    let option
      var dom = document.getElementById("container");
      var myChart = echarts.init(dom);
      var app = {};


      option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}€ ({d}%)'
        },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: this.arrayGrafico,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      if (option && typeof option === 'object') {
        myChart.setOption(option);
      }


  }

}
