import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-combinados-predeterminados-sin-stock',
  templateUrl: './combinados-predeterminados-sin-stock.component.html',
  styleUrls: ['./combinados-predeterminados-sin-stock.component.scss']
})
export class CombinadosPredeterminadosSinStockComponent implements OnInit {

  predeterminados: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 10000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.combinadosPredeterminadosSinStock().subscribe(data=>{
      this.predeterminados = data
    })
  }

}
