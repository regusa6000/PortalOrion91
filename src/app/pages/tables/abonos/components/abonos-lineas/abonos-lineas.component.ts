import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-abonos-lineas',
  templateUrl: './abonos-lineas.component.html',
  styleUrls: ['./abonos-lineas.component.scss']
})
export class AbonosLineasComponent implements OnInit {

  @Input() orPedido: any
  source: any

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    let json = {'orPedido': this.orPedido}
    this.authSvc.buscarLineasAbonos(json).subscribe(data=>{
      this.source = data
      console.log(this.source)
    })
  }

}
