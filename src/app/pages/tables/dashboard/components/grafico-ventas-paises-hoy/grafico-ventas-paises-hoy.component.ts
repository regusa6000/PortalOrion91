import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-grafico-ventas-paises-hoy',
  templateUrl: './grafico-ventas-paises-hoy.component.html',
  styleUrls: ['./grafico-ventas-paises-hoy.component.scss']
})
export class GraficoVentasPaisesHoyComponent implements OnInit {

  grafico: any
  arrayAux = []
  arrayAuxColors = []

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {

    this.authSvc.graficoVentasPaisesHoy().subscribe(data=>{
      this.grafico = data

      for(let a = 0 ; a < this.grafico.length ; a++){
        let json = {
          'value': this.grafico[a].total,
          'name': this.grafico[a].name
        }
        this.arrayAux.push(json)
      }

      let arrayColores = [
        {'name': 'Alemania', 'color': '#000000'},{'name': 'Bélgica', 'color': '#F2B700'},{'name': 'España','color': '#D60000'},{'name': 'Francia','color': '#002551'},
        {'name': 'Italia','color': '#008D44'},{'name': 'Países Bajos','color': '#A84001'},{'name': 'Portugal', 'color': '#006300'},{'name': 'Austria', 'color': '#E62837'}
      ]

      for(let paises = 0 ; paises < this.arrayAux.length ; paises++){

        for(let color = 0 ; color < arrayColores.length ; color++){

          if(this.arrayAux[paises].name == arrayColores[color].name){
            this.arrayAuxColors.push(arrayColores[color].color)
          }

        }

      }

      console.log('colores')
      console.log(this.arrayAuxColors)

      console.log(this.grafico)
      console.log(this.arrayAux[0].name)
      console.log(arrayColores[0].name)

      let option
      var dom = document.getElementById("containerPaisesHoy");
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
            data: this.arrayAux,
            color: this.arrayAuxColors,
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


    })

  }

}
