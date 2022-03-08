import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../../auth/auth.service';

@Component({
  selector: 'ngx-zonas',
  templateUrl: './zonas.component.html',
  styleUrls: ['./zonas.component.scss']
})
export class ZonasComponent implements OnInit {

  links: any
  @Input() idZona: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.cargarLinksPorIdZona(this.idZona).subscribe(data=>{
      this.links = data
    })
  }

}
