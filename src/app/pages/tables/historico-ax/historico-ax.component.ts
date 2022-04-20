import { Component, OnInit } from '@angular/core';
import { NbComponentStatus, NbToastrService } from '@nebular/theme';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-historico-ax',
  templateUrl: './historico-ax.component.html',
  styleUrls: ['./historico-ax.component.scss']
})
export class HistoricoAxComponent implements OnInit {

  orPedido: any
  incidencias: any
  cargas: any
  ok: number

  constructor(public authSvc: AuthService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
  }

  buscarOr(){

    let jsonToken  = {
      'email': 'rgutierrez@hidalgosgroup.com',
      'password': 'Orion2021'
    }

    this.authSvc.cargarToken(jsonToken).subscribe(data=>{
      let token = data['details'].access_token

      let jsonIncidencia = {
        'token': token,
        'pedido': this.orPedido
      }

      this.authSvc.cargarIncidencia(jsonIncidencia).subscribe(data=>{
        this.incidencias = data['details'].incidencias
        this.cargas = data['details'].cargas
        // console.log(this.incidencias)
        this.ok = 1
        this.orPedido = ''
      }, error=>{
        this.ok = 0
        this.showToastErrorDatos('danger')
      })

    })

  }

  showToastErrorDatos(status: NbComponentStatus) {
    this.toastrService.show(status, `OR no encontrado!`, { status });
  }

}
