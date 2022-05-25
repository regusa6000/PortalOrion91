import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-combinados-precios-diferentes',
  templateUrl: './combinados-precios-diferentes.component.html',
  styleUrls: ['./combinados-precios-diferentes.component.scss']
})
export class CombinadosPreciosDiferentesComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.productosDiferenciaPreciosCombinados().subscribe(data=>{
      this.source = data
    })
  }

}
