import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.scss']
})
export class IncidenciasComponent implements OnInit {

  @Input() incidencia: any

  constructor() { }

  ngOnInit(): void {}

}
