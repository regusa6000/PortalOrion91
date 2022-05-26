import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-incidencia-por-abono',
  templateUrl: './incidencia-por-abono.component.html',
  styleUrls: ['./incidencia-por-abono.component.scss']
})
export class IncidenciaPorAbonoComponent implements OnInit {

  @Input() orPedido: any
  contadorIncidencias: any
  incidencia: any

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {

    let json = {'orPedido': this.orPedido}

    this.authSvc.countIncidenciaPorAbono(json).subscribe(data=>{
      this.contadorIncidencias = data
    })

    this.authSvc.incidenciaPorAbono(json).subscribe(data=>{
      this.incidencia = data
    })

  }

}
