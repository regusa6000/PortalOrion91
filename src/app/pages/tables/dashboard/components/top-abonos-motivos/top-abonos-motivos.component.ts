import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-top-abonos-motivos',
  templateUrl: './top-abonos-motivos.component.html',
  styleUrls: ['./top-abonos-motivos.component.scss']
})
export class TopAbonosMotivosComponent implements OnInit {

  source: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.top10AbonosMotivos().subscribe(data=>{
      this.source = data
    })
  }

}
