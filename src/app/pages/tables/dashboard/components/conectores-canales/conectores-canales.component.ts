import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-conectores-canales',
  templateUrl: './conectores-canales.component.html',
  styleUrls: ['./conectores-canales.component.scss']
})
export class ConectoresCanalesComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.conectoresCanales().subscribe(data=>{
      this.source = data
    })
  }

}
