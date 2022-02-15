import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-imagenes-cleaner',
  templateUrl: './imagenes-cleaner.component.html',
  styleUrls: ['./imagenes-cleaner.component.scss']
})
export class ImagenesCleanerComponent implements OnInit {

  imagenesCleaner: any

  constructor(public authSvc: AuthService) { }

  ngOnInit(): void {
    this.authSvc.controlImagenes().subscribe(data=>{
      this.imagenesCleaner = data
    })
  }

}
