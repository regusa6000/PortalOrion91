import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-no-mapeados-ali-express',
  templateUrl: './no-mapeados-ali-express.component.html',
  styleUrls: ['./no-mapeados-ali-express.component.scss']
})
export class NoMapeadosAliExpressComponent implements OnInit {

  ali: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
  }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.noMapeadosAli().subscribe(data=>{
      this.ali = data
    })
  }

}
