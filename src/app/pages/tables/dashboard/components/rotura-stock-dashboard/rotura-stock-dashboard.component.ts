import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-rotura-stock-dashboard',
  templateUrl: './rotura-stock-dashboard.component.html',
  styleUrls: ['./rotura-stock-dashboard.component.scss']
})
export class RoturaStockDashboardComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.roturaStockDashBoard().subscribe(data=>{
      this.source = data
    })
  }

}
