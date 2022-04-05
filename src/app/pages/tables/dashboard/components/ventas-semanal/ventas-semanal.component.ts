import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-ventas-semanal',
  templateUrl: './ventas-semanal.component.html',
  styleUrls: ['./ventas-semanal.component.scss']
})
export class VentasSemanalComponent implements OnInit {

  datos: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.ventasUltimaSemana().subscribe(data=>{
      this.datos = data
    })
  }

}
