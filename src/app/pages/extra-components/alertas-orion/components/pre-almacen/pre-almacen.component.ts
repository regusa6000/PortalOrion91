import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-pre-almacen',
  templateUrl: './pre-almacen.component.html',
  styleUrls: ['./pre-almacen.component.scss']
})
export class PreAlmacenComponent implements OnInit {

  preAlmacen: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.preAlmacen().subscribe(data=>{
      this.preAlmacen = data
    })
  }

}
