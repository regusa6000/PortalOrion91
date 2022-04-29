import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-grafico-ventas',
  templateUrl: './grafico-ventas.component.html',
  styleUrls: ['./grafico-ventas.component.scss']
})
export class GraficoVentasComponent implements OnInit {

  grafico: any
  arrayGrafico = []

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {

    this.authSvc.graficoVentas().subscribe(data=>{
      this.grafico = data
      console.log(this.grafico)

      if(data[0].Sum_Orion > 0){
        let json = {value: data[0].Sum_Orion, name: 'Orion91'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Amazon > 0){
        let json = {value: data[0].Sum_Amazon, name: 'Amazon'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Makro > 0){
        let json = {value: data[0].Sum_Makro, name: 'Makro'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Manomano > 0){
        let json = {value: data[0].Sum_Manomano, name: 'ManoMano'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Aliexpress > 0){
        let json = {value: data[0].Sum_Aliexpress, name: 'AliExpress'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Wortem > 0){
        let json = {value: data[0].Sum_Wortem, name: 'Worten'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Carrefour > 0){
        let json = {value: data[0].Sum_Carrefour, name: 'Carrefour'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Embargos > 0){
        let json = {value: data[0].Sum_Embargos, name: 'Embargos'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_MequedoUno > 0){
        let json = {value: data[0].Sum_MequedoUno, name: 'MequedoUno'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Sprinter > 0){
        let json = {value: data[0].Sum_Sprinter, name: 'Sprinter'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Bulevip > 0){
        let json = {value: data[0].Sum_Bulevip, name: 'Bulevip'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Venca > 0){
        let json = {value: data[0].Sum_Venca, name: 'Venca'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Fnac > 0){
        let json = {value: data[0].Sum_Fnac, name: 'Fnac'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_MediaMarkt > 0){
        let json = {value: data[0].Sum_MediaMarkt, name: 'MediaMarkt'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_PcComponentes > 0){
        let json = {value: data[0].Sum_PcComponentes, name: 'PcComponentes'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Wish > 0){
        let json = {value: data[0].Sum_Wish, name: 'Wish'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Vipalia > 0){
        let json = {value: data[0].Sum_Vipalia, name: 'Vipalia'}
        this.arrayGrafico.push(json)
      }
      if(data[0].Sum_Groupon > 0){
        let json = {value: data[0].Sum_Groupon, name: 'Groupon'}
        this.arrayGrafico.push(json)
      }

      console.log(this.arrayGrafico)

      let option
      var dom = document.getElementById("container");
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
            color: ['#008AF8','#131921','#002D72','#00E8CB','#E63107','#E41A15','#4674B4','#BDBEC0','#383637','#008B55','#52B9E2','#E8A6BC','#E1A925','#DF0000','#FF9400','#17B3EA','#D8A27A','#81B546'],
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
