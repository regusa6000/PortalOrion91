import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-or-duplicados',
  templateUrl: './or-duplicados.component.html',
  styleUrls: ['./or-duplicados.component.scss']
})
export class OrDuplicadosComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.pedidosDuplicados().subscribe(data=>{
      this.source = data
    })
  }

}
