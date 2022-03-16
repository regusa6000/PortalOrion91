import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-alertas-amazon',
  templateUrl: './alertas-amazon.component.html',
  styleUrls: ['./alertas-amazon.component.scss']
})
export class AlertasAmazonComponent implements OnInit {

  mpAmazon: any

  constructor(public authSvc: AuthService) {
    this.refrescarTabla();
    setInterval(() => { this.refrescarTabla(); }, 300000);
   }

  ngOnInit(): void {
  }

  refrescarTabla(){
    this.authSvc.alertasAmazon().subscribe(data=>{
      this.mpAmazon = data
    })
  }

}
