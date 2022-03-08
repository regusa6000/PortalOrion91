import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-carpeta-compartidos',
  templateUrl: './carpeta-compartidos.component.html',
  styleUrls: ['./carpeta-compartidos.component.scss']
})
export class CarpetaCompartidosComponent implements OnInit {

  zonas: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarZonas().subscribe(data=>{
      this.zonas = data
    })
  }

}
