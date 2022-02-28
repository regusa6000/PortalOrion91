import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-importe-de-ventas',
  templateUrl: './importe-de-ventas.component.html',
  styleUrls: ['./importe-de-ventas.component.scss']
})
export class ImporteDeVentasComponent implements OnInit {

  chart: Chart | undefined;
  chartSumatoria: Chart | undefined;
  importeVenta: any;

  //Sumatorias
  sumatorioSemana: any;
  sumatoriaOrion: any;
  sumatoriaManoMano: any;
  sumatoriaCarrefour: any;
  sumatoriaAliExpress: any;
  sumatorioAmazon: any;
  sumatorioGrupon: any;
  sumatorioEmbargos: any;
  sumatorioMequedoUno: any;
  sumatorioFnac: any;
  sumatorioWish: any;
  sumatorioMakro: any;
  sumatorioPcComponenetes: any;
  sumatorioSprinter: any;
  sumatorioBulevip: any;

  mostrar = true

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {

    this.authSvc.sumatoriaPorSemana().subscribe(data=>{
      this.sumatorioSemana = data
      this.lineaSumatoria(this.sumatorioSemana)
    })

  }

  buscar(value: number){
    this.mostrar = false
    switch(value){
      case 0:
        this.authSvc.importeDeVentas().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
           this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 1:
        this.authSvc.importeDeVentasManoMano().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 2:
        this.authSvc.importeDeVentasCarrefour().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 3:
        this.authSvc.importeDeVentasAliExpress().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 4:
        this.authSvc.importeDeVentasAmazon().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 5:
        this.authSvc.importeDeVentasGroupon().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 6:
        this.authSvc.importeDeVentasEmbargos().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 7:
        this.authSvc.importeDeVentasMequedoUno().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 8:
        this.authSvc.importeDeVentasFnac().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 9:
        this.authSvc.importeDeVentasWish().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 10:
        this.authSvc.importeDeVentasMakro().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 11:
        this.authSvc.importeDeVentasPcComponentes().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 12:
        this.authSvc.importeDeVentasSprinte().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
        break;
      case 13:
        this.authSvc.importeDeVentasBulevip().subscribe(data=>{
          this.importeVenta = '';
          this.importeVenta = data
          this.lineaGrafica(this.importeVenta)
          console.log(this.importeVenta)
        })
    }

  }

  lineaGrafica(value: any){

    if(this.chart){
      this.chart.destroy();
    }

    let miArray = [];

    for(let a = 0 ; a < 9; a++){
      if(value[a].IMPORTE == null){
        value[a].IMPORTE = 0
      }
      miArray.push(value[a].IMPORTE);

    }
    console.log(miArray);
      this.chart = new Chart('canvas', {
      type: 'line',
      data: {
          labels: [
                    value[8].DIA_SEMANA,value[7].DIA_SEMANA,value[6].DIA_SEMANA,value[5].DIA_SEMANA,
                    value[4].DIA_SEMANA,value[3].DIA_SEMANA,value[2].DIA_SEMANA,value[1].DIA_SEMANA,value[0].DIA_SEMANA
                  ],
          datasets: [{
              label: 'Importe',
              data: [
                    miArray[8],miArray[7],miArray[6],miArray[5],
                    miArray[4],miArray[3],miArray[2],miArray[1],miArray[0]
                    ],
              backgroundColor: '#1689F5',
              borderColor: 'black',
              borderWidth: 3
          }]
      }
  });

  }

  lineaSumatoria(arrayTotal: any){

    if(this.chartSumatoria){
      this.chartSumatoria.destroy();
    }

    //ArrayTotal
    let miArraySumatoria = [];
    let fecha = [];
    for(let a = 0 ; a < arrayTotal.length; a++){
      miArraySumatoria[a] = arrayTotal[a].tot_sum_IVA
      fecha[a] = "Semana: "+ arrayTotal[a].semana + " del " + arrayTotal[a].year_
    }
    fecha.reverse();
    miArraySumatoria.reverse();

      this.chartSumatoria = new Chart('canvasSumatoria', {
      type: 'line',
      data: {
          labels: fecha,
          datasets: [
            {
              label: 'Total',
              data: miArraySumatoria,
              borderColor: 'black',
              borderWidth: 3
            }
        ]
      },
  });

  }


  agregar(value: number){

    let arrayOrion: any[] = []
    let arrayManoMano: any[] = []
    let arrayCarrefour: any[] = []
    let arrayAliExpress: any[] = []
    let arrayAmazon: any[] = []
    let arrayGrupon: any[] = []
    let arrayEmbargos: any[] = []
    let arrayMequedoUno: any[] = []
    let arrayFnac: any[] = []
    let arrayWish: any[] = []
    let arrayMakro: any[] = []
    let arrayPcComponentes: any[] = []
    let arraySprinter: any[] = []
    let arrayBulevip: any[] = []

    switch(value){
      case 0:
        this.authSvc.sumatoriaPorSemanaOrion91().subscribe(data=>{
          this.sumatoriaOrion = data
          for(let a = 0; a < this.sumatoriaOrion.length; a++){
            arrayOrion[a] = this.sumatoriaOrion[a].ORION91_SUM
          }
          arrayOrion.reverse();

          let nuevo = {
            label: 'Orion91',
                      data: arrayOrion,
                      backgroundColor: '',
                      borderColor: '#1689F5',
                      borderWidth: 3
                      }
            this.chartSumatoria?.data.datasets?.push(nuevo)
            console.log(arrayOrion)
        })
        break;
      case 1:
        this.authSvc.sumatoriaPorSemanaManoMano().subscribe(data=>{
          this.sumatoriaManoMano = data
          for(let a = 0; a < this.sumatoriaManoMano.length; a++){
            if(this.sumatoriaManoMano[a].MANOMANO_SUM == null){
              this.sumatoriaManoMano[a].MANOMANO_SUM = 0
            }
            arrayManoMano[a] = this.sumatoriaManoMano[a].MANOMANO_SUM
          }
          arrayManoMano.reverse();

          let nuevo = {
            label: 'ManoMano',
                      data: arrayManoMano,
                      backgroundColor: '',
                      borderColor: 'red',
                      borderWidth: 3
                      }
            this.chartSumatoria?.data.datasets?.push(nuevo)
            console.log(arrayManoMano)
        })
        break;
      case 2:
        this.authSvc.sumatorioPorSemanaCarrefour().subscribe(data=>{
          this.sumatoriaCarrefour = data
          for(let a = 0; a < this.sumatoriaCarrefour.length; a++){
            if(this.sumatoriaCarrefour[a].CARREFOUR_SUM == null){
              this.sumatoriaCarrefour[a].CARREFOUR_SUM = 0
            }
            arrayCarrefour[a] = this.sumatoriaCarrefour[a].CARREFOUR_SUM
          }
          arrayCarrefour.reverse();
          let nuevo = {
            label: 'Carrefour',
                      data: arrayCarrefour,
                      backgroundColor: '',
                      borderColor: 'blue',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayCarrefour)

        })
        break;
      case 3:
        this.authSvc.sumatorioPorSemanaAliExpress().subscribe(data=>{
          this.sumatoriaAliExpress = data
          for(let a = 0; a < this.sumatoriaAliExpress.length; a++){
            if(this.sumatoriaAliExpress[a].ALIEXPRESS_SUM == null){
              this.sumatoriaAliExpress[a].ALIEXPRESS_SUM = 0
            }
            arrayAliExpress[a] = this.sumatoriaAliExpress[a].ALIEXPRESS_SUM
          }
          arrayAliExpress.reverse();
          let nuevo = {
            label: 'Ali Express',
                      data: arrayAliExpress,
                      backgroundColor: '',
                      borderColor: 'orange',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayAliExpress)
        })
        break;
      case 4:
        this.authSvc.sumatorioPorSemanaAmazon().subscribe(data=>{
          this.sumatorioAmazon = data
          for(let a = 0; a < this.sumatorioAmazon.length; a++){
            if(this.sumatorioAmazon[a].AMAZON_SUM == null){
              this.sumatorioAmazon[a].AMAZON_SUM = 0
            }
            arrayAmazon[a] = this.sumatorioAmazon[a].AMAZON_SUM
          }
          arrayAmazon.reverse();
          let nuevo = {
            label: 'Amazon',
                      data: arrayAmazon,
                      backgroundColor: '',
                      borderColor: 'green',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayAmazon)
        })
        break;
      case 5:
        this.authSvc.sumatorioPorSemanaGrupon().subscribe(data=>{
          this.sumatorioGrupon = data
          for(let a = 0; a < this.sumatorioGrupon.length; a++){
            if(this.sumatorioGrupon[a].GROUPON_SUM == null){
              this.sumatorioGrupon[a].GROUPON_SUM = 0
            }
            arrayGrupon[a] = this.sumatorioGrupon[a].GROUPON_SUM
          }
          arrayGrupon.reverse();
          let nuevo = {
            label: 'Grupon',
                      data: arrayGrupon,
                      backgroundColor: '',
                      borderColor: 'pink',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayGrupon)
        })
        break;
      case 6:
        this.authSvc.sumatorioPorSemanaEmbargos().subscribe(data=>{
          this.sumatorioEmbargos = data
          for(let a = 0; a < this.sumatorioEmbargos.length; a++){
            if(this.sumatorioEmbargos[a].EMBARGOS_SUM == null){
              this.sumatorioEmbargos[a].EMBARGOS_SUM = 0
            }
            arrayEmbargos[a] = this.sumatorioEmbargos[a].EMBARGOS_SUM
          }
          arrayEmbargos.reverse();
          let nuevo = {
            label: 'Embargos',
                      data: arrayEmbargos,
                      backgroundColor: '',
                      borderColor: '#6C3483',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayEmbargos)
        })
        break;
      case 7:
        this.authSvc.sumatorioPorSemanaMequedoUno().subscribe(data=>{
          this.sumatorioMequedoUno = data
          for(let a = 0; a < this.sumatorioMequedoUno.length; a++){
            if(this.sumatorioMequedoUno[a].MEQUEDOUNO_SUM == null){
              this.sumatorioMequedoUno[a].MEQUEDOUNO_SUM = 0
            }
            arrayMequedoUno[a] = this.sumatorioMequedoUno[a].MEQUEDOUNO_SUM
          }
          arrayMequedoUno.reverse();
          let nuevo = {
            label: 'Mequedo Uno',
                      data: arrayMequedoUno,
                      backgroundColor: '',
                      borderColor: '#9A7D0A',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayMequedoUno)
        })
        break;
      case 8:
        this.authSvc.sumatorioPorSemanaFnac().subscribe(data=>{
          this.sumatorioFnac = data
          for(let a = 0; a < this.sumatorioFnac.length; a++){
            if(this.sumatorioFnac[a].FNAC_SUM == null){
              this.sumatorioFnac[a].FNAC_SUM = 0
            }
            arrayFnac[a] = this.sumatorioFnac[a].FNAC_SUM
          }
          arrayFnac.reverse();
          let nuevo = {
            label: 'Fnac',
                      data: arrayFnac,
                      backgroundColor: '',
                      borderColor: '#1A5276',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayFnac)
        })
        break;
      case 9:
        this.authSvc.sumatorioPorSemanaWish().subscribe(data=>{
          this.sumatorioWish = data
          for(let a = 0; a < this.sumatorioWish.length; a++){
            if(this.sumatorioWish[a].WISH_SUMA == null){
              this.sumatorioWish[a].WISH_SUMA = 0
            }
            arrayWish[a] = this.sumatorioWish[a].WISH_SUMA
          }
          arrayWish.reverse();
          let nuevo = {
            label: 'Wish',
                      data: arrayWish,
                      backgroundColor: '',
                      borderColor: '#4D5656',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayWish)
        })
        break;
      case 10:
        this.authSvc.sumatorioPorSemanaMakro().subscribe(data=>{
          this.sumatorioMakro = data
          for(let a = 0; a < this.sumatorioMakro.length; a++){
            if(this.sumatorioMakro[a].MAKRO_SUMA == null){
              this.sumatorioMakro[a].MAKRO_SUMA = 0
            }
            arrayMakro[a] = this.sumatorioMakro[a].MAKRO_SUMA
          }
          arrayMakro.reverse();
          let nuevo = {
            label: 'Makro',
                      data: arrayMakro,
                      backgroundColor: '',
                      borderColor: '#7B241C',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayMakro)
        })
        break;
      case 11:
        this.authSvc.sumatorioPorSemanaPcComponentes().subscribe(data=>{
          this.sumatorioPcComponenetes = data
          for(let a = 0; a < this.sumatorioPcComponenetes.length; a++){
            if(this.sumatorioPcComponenetes[a].PcCOMPOMENTES_SUMA == null){
              this.sumatorioPcComponenetes[a].PcCOMPOMENTES_SUMA = 0
            }
            arrayPcComponentes[a] = this.sumatorioPcComponenetes[a].PcCOMPOMENTES_SUMA
          }
          arrayPcComponentes.reverse();
          let nuevo = {
            label: 'Pc Componentes',
                      data: arrayPcComponentes,
                      backgroundColor: '',
                      borderColor: '#E74C3C',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayPcComponentes)
        })
        break;
      case 12:
        this.authSvc.sumatorioPorSemanaSprinter().subscribe(data=>{
          this.sumatorioSprinter = data
          for(let a = 0; a < this.sumatorioSprinter.length; a++){
            if(this.sumatorioSprinter[a].SPRINTER_SUM == null){
              this.sumatorioSprinter[a].SPRINTER_SUM = 0
            }
            arraySprinter[a] = this.sumatorioSprinter[a].SPRINTER_SUM
          }
          arraySprinter.reverse();
          let nuevo = {
            label: 'Sprinter',
                      data: arraySprinter,
                      backgroundColor: '',
                      borderColor: '#F5B041',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arraySprinter)
        })
        break;
      case 13:
        this.authSvc.sumatorioPorSemanaBulevip().subscribe(data=>{
          this.sumatorioBulevip = data
          for(let a = 0; a < this.sumatorioBulevip.length; a++){
            if(this.sumatorioBulevip[a].BULEVIP_SUM == null){
              this.sumatorioBulevip[a].BULEVIP_SUM = 0
            }
            arrayBulevip[a] = this.sumatorioBulevip[a].BULEVIP_SUM
          }
          arrayBulevip.reverse();
          let nuevo = {
            label: 'Bulevip',
                      data: arrayBulevip,
                      backgroundColor: '',
                      borderColor: '#58D68D',
                      borderWidth: 3
                      }
          this.chartSumatoria?.data.datasets?.push(nuevo)
          console.log(arrayBulevip)
        })
        break;
    }
    console.log(this.chartSumatoria?.data.datasets)
  }

}
