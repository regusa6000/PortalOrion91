import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-errores-ali-express',
  templateUrl: './errores-ali-express.component.html',
  styleUrls: ['./errores-ali-express.component.scss']
})
export class ErroresAliExpressComponent implements OnInit {

  erroresAli: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 100000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.controlAliExpress().subscribe(data=>{
      this.erroresAli = data
    })
  }

}
