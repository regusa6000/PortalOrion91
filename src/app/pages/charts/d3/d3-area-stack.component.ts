import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-d3-area-stack',
  template: `
    <!-- <ngx-charts-area-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [autoScale]="autoScale"
      [options]>
    </ngx-charts-area-chart> -->
    <div id="container" style="height: 100%"></div>
  `,
})
export class D3AreaStackComponent implements OnDestroy, OnInit{
  multi = [{
    name: 'Germany',
    series: [{
        name: '2010',
        value: 7300000,
      }, {
        name: '2011',
        value: 8940000,
      }],
  }, {
    name: 'USA',
    series: [{
        name: '2010',
        value: 7870000,
      }, {
        name: '2011',
        value: 8270000,
      }],
  }, {
    name: 'France',
    series: [{
        name: '2010',
        value: 5000002,
      }, {
        name: '2011',
        value: 5800000,
      }],
  }];
  showLegend = true;
  autoScale = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private authSvc: AuthService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }
  ngOnInit(): void {
    this.authSvc.cargarGraficoCategorias().subscribe(data=>{
      var dom = document.getElementById("container");
      var myChart = echarts.init(dom);
      var app = {};

      var option;

      option = {
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [
          {
            type: 'tree',
            id: 0,
            name: 'tree1',
            data: [data],

            top: '0%',
            left: '15%',
            bottom: '0%',
            right: '15%',

            symbolSize: 7,

            // edgeShape: 'polyline',
            // edgeForkPosition: '63%',
            // initialTreeDepth: 3,

            // lineStyle: {
            //   width: 2
            // },

            label: {
              backgroundColor: '#fff',
              position: 'left',
              verticalAlign: 'middle',
              align: 'right'
            },

            leaves: {
              label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
              }
            },

            emphasis: {
              focus: 'descendant'
            },

            expandAndCollapse: true,
            animationDuration: 550,
            animationDurationUpdate: 750
          }
        ]
      };

      setTimeout(() => {
        myChart.setOption(option);
       }, 10000);


       console.log(data)

    })
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
