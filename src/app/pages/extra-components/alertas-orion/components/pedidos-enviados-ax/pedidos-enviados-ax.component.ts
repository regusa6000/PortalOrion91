import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pedidos-enviados-ax',
  templateUrl: './pedidos-enviados-ax.component.html',
  styleUrls: ['./pedidos-enviados-ax.component.scss']
})
export class PedidosEnviadosAxComponent implements OnInit {

  source: any
  arrayPrincipal: any = []
  idPedido: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    let jsonToken  = {
      'email': 'rgutierrez@hidalgosgroup.com',
      'password': 'Orion2021'
    }

    this.authSvc.cargarToken(jsonToken).subscribe(data=>{
      let token = data['details'].access_token

      let jsontTok = {'token': token}

      this.authSvc.pedidosPendientesAx(jsontTok).subscribe(data=>{
        this.source = data['details'].listado
        this.arrayPrincipal = this.source

        // for(let a = 0 ; a < this.arrayPrincipal.length ; a++){

        //   let json = {'reference': this.arrayPrincipal[a].REFERENCIA}

        //   this.authSvc.buscarIdPedido(json).subscribe(data=>{
        //     this.idPedido = data
        //     console.log('IDPEDIDO -> ' + this.idPedido.id_order)

        //     // this.arrayPrincipal[a].push({idPedido: this.idPedido.id_order})
        //     console.log(this.arrayPrincipal[0].concat('aaaaa'))
        //     // console.log('Pendientes Ax')

        //     // console.log(this.source.length)


        //   })

        // }

      })

    })
  }

}
