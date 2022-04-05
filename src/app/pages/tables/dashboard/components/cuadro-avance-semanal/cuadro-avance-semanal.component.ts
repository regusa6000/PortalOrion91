import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-cuadro-avance-semanal',
  templateUrl: './cuadro-avance-semanal.component.html',
  styleUrls: ['./cuadro-avance-semanal.component.scss']
})
export class CuadroAvanceSemanalComponent implements OnInit {

  avance: any
  importeHoy: number
  importe7: number
  porcentajeImporte: any = []
  porcentajeImportePosibleNegativo: any = []

  pedidosHoy: any
  pedidos7: any
  porcentajePedidos: any = []
  porcentajePosibleNegativo: any = []

  carritoHoy: any
  carrito7: any
  porcentajeCarrito: any = []
  porcentajeCarritoPosibleNegativo: any = []

  constructor(public authSvc: AuthService) {}

  ngOnInit(): void {
    this.authSvc.avanceSemanal().subscribe(data=>{
      //Ventas
      this.importeHoy = data[0].sum_importe_hoy
      this.importe7 = data[0].sum_importe_7
      this.porcentajeImporte.push(data[0].porcentajeImporte)
      this.porcentajeImportePosibleNegativo.push(data[0].porcentajeImporte)

      if(this.porcentajeImportePosibleNegativo < 0){
        this.porcentajeImportePosibleNegativo = Math.abs(this.porcentajeImportePosibleNegativo)
      }else{
        this.porcentajeImportePosibleNegativo = this.porcentajeImporte
      }

      //Pedidos
      this.pedidosHoy = data[0].count_ped_hoy
      this.pedidos7 = data[0].count_ped_7
      this.porcentajePedidos.push(data[0].porcentajeCount_7)
      this.porcentajePosibleNegativo.push(data[0].porcentajeCount_7)

      if(this.porcentajePosibleNegativo < 0){
        this.porcentajePosibleNegativo = Math.abs(this.porcentajePosibleNegativo)
      }else{
        this.porcentajePosibleNegativo = this.porcentajePedidos
      }

      //Carrito
      this.carritoHoy = data[0].carr_med_hoy
      this.carrito7 = data[0].carr_med_7
      this.porcentajeCarrito.push(data[0].carritoPorcentaje)
      this.porcentajeCarritoPosibleNegativo.push(data[0].carritoPorcentaje)

      if(this.porcentajeCarritoPosibleNegativo < 0){
        this.porcentajeCarritoPosibleNegativo = Math.abs(this.porcentajeCarritoPosibleNegativo)
      }else{
        this.porcentajeCarritoPosibleNegativo = this.porcentajeCarrito
      }

    })
  }

  get status(){
    if(this.porcentajeImporte >= 0){
      return 'success';
    }else{
      return 'danger';
    }
  }

  get status2(){
    if(this.porcentajePedidos >= 0){
       return 'success';
    }else{
      return 'danger';
    }
  }

  get status3(){
    if(this.porcentajeCarrito >= 0){
      return 'success';
    }else{
      return 'danger';
    }
  }

}
