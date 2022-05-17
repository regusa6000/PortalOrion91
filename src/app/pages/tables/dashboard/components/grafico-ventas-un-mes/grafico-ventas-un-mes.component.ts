import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-grafico-ventas-un-mes',
  templateUrl: './grafico-ventas-un-mes.component.html',
  styleUrls: ['./grafico-ventas-un-mes.component.scss']
})
export class GraficoVentasUnMesComponent implements OnInit {

  arrayGrafico = []
  arrayColores = []

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.graficoVentasUnMes().subscribe(data=>{

      if(data[0].Sum_Orion > 0){
        let json = {value: data[0].Sum_Orion, name: 'Orion91'}
        let color = '#008AF8'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Amazon > 0){
        let json = {value: data[0].Sum_Amazon, name: 'Amazon'}
        let color = '#131921'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Makro > 0){
        let json = {value: data[0].Sum_Makro, name: 'Makro'}
        let color = '#002D72'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Manomano > 0){
        let json = {value: data[0].Sum_Manomano, name: 'ManoMano'}
        let color = '#00E8CB'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Aliexpress > 0){
        let json = {value: data[0].Sum_Aliexpress, name: 'AliExpress'}
        let color = '#E63107'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Wortem > 0){
        let json = {value: data[0].Sum_Wortem, name: 'Worten'}
        let color = '#E41A15'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Carrefour > 0){
        let json = {value: data[0].Sum_Carrefour, name: 'Carrefour'}
        let color = '#4674B4'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Embargos > 0){
        let json = {value: data[0].Sum_Embargos, name: 'Embargos'}
        let color = '#BDBEC0'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_MequedoUno > 0){
        let json = {value: data[0].Sum_MequedoUno, name: 'MequedoUno'}
        let color = '#383637'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Sprinter > 0){
        let json = {value: data[0].Sum_Sprinter, name: 'Sprinter'}
        let color = '#008B55'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Bulevip > 0){
        let json = {value: data[0].Sum_Bulevip, name: 'Bulevip'}
        let color = '#52B9E2'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Venca > 0){
        let json = {value: data[0].Sum_Venca, name: 'Venca'}
        let color = '#E8A6BC'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Fnac > 0){
        let json = {value: data[0].Sum_Fnac, name: 'Fnac'}
        let color = '#E1A925'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_MediaMarkt > 0){
        let json = {value: data[0].Sum_MediaMarkt, name: 'MediaMarkt'}
        let color = '#DF0000'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_PcComponentes > 0){
        let json = {value: data[0].Sum_PcComponentes, name: 'PcComponentes'}
        let color = '#FF9400'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Wish > 0){
        let json = {value: data[0].Sum_Wish, name: 'Wish'}
        let color = '#17B3EA'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Vipalia > 0){
        let json = {value: data[0].Sum_Vipalia, name: 'Vipalia'}
        let color = '#D8A27A'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }
      if(data[0].Sum_Groupon > 0){
        let json = {value: data[0].Sum_Groupon, name: 'Groupon'}
        let color = '#81B546'
        this.arrayGrafico.push(json)
        this.arrayColores.push(color)
      }

      console.log(this.arrayGrafico)

      let option
      var dom = document.getElementById("container3");
      var myChart = echarts.init(dom);
      var app = {};


      option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}€ ({d}%)'
        },
        // legend: {
        //   bottom: 10,
        //   left: 'center',
        //   data: ['Orion91', 'Amazon', 'Makro', 'ManoMano', 'AliExpress','Worten','Carrefour','Embargos','MequedoUno','Sprinter','Bulevip','Venca','Fnac','MediaMarkt']
        // },
        series: [
          {
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data: this.arrayGrafico,
            color: this.arrayColores,
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
