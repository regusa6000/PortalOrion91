import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-transportista',
  templateUrl: './transportista.component.html',
  styleUrls: ['./transportista.component.scss']
})
export class TransportistaComponent implements OnInit {

  @Input() cargas: any

  constructor() { }

  ngOnInit(): void {
  }

}
