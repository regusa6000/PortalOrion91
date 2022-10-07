import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-top-productos-abonados',
  templateUrl: './top-productos-abonados.component.html',
  styleUrls: ['./top-productos-abonados.component.scss']
})
export class TopProductosAbonadosComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.top10ProductosAbonados().subscribe(data=>{
      this.source = data
    })
  }

}
