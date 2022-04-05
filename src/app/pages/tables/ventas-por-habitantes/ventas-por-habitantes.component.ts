import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";
import { HttpClient } from "@angular/common/http";
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'ngx-ventas-por-habitantes',
  templateUrl: './ventas-por-habitantes.component.html',
  styleUrls: ['./ventas-por-habitantes.component.scss']
})
export class VentasPorHabitantesComponent implements OnInit {

  arrayGlobal: any

  map: L.Map;
  json;
  options = {
    layers: [
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: ""
      })
    ],
    zoom: 7,
    center: L.latLng(40.416500, -3.702560)
  };

  constructor(private http: HttpClient,public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  onMapReady(map: L.Map) {

    this.http.get("/orion/assets/departaments.json").subscribe((json: any) => {
      console.log(json);
      this.json = json;
      // L.geoJSON(this.json).addTo(map);

      this.authSvc.ventasHabitantes().subscribe(data=>{

        let stilo1 = {fillColor: "#e3ff14",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        var stilo2 = {fillColor: "#6fcff7",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        var stilo3 = {fillColor: "#5bb1e6",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        var stilo4 = {fillColor: "#51a3de",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        var stilo5 = {fillColor: "#4794d5",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        var stilo6 = {fillColor: "#3c85cd",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        var stilo7 = {fillColor: "#3276c5",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        var stilo8 = {fillColor: "#2867bc",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        var stilo9 = {fillColor: "#1e58b4",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        var stilo10 = {fillColor: "#144aac",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        var stilo11 = {fillColor: "#0a3ba3",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}

        // let stilo1 = {fillColor: "#2f3ecb",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        // var stilo2 = {fillColor: "#2e70ca",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        // var stilo3 = {fillColor: "#2ea2ca",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        // var stilo4 = {fillColor: "#2dcabf",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        // var stilo5 = {fillColor: "#2dcabf",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        // var stilo6 = {fillColor: "#2cc858",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        // var stilo7 = {fillColor: "#63c72a",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        // var stilo8 = {fillColor: "#96c72a",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        // var stilo9 = {fillColor: "#c69128",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        // var stilo10 = {fillColor: "#c55e28",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}
        // var stilo11 = {fillColor: "#c52a27",weight: 2, opacity: 1, color: 'white', dashArray: '3', fillOpacity: 1}

        this.arrayGlobal = data

        var century21icon = L.icon({
          iconUrl: 'https://orion91.com/img/isologo_orion91.png',
          iconSize: [30, 30]
          });

        for(let a = 0 ; a < this.arrayGlobal.length ; a++){

          var location = [this.arrayGlobal[a].latitud, this.arrayGlobal[a].longitud];
          var marker = L.marker([this.arrayGlobal[a].latitud, this.arrayGlobal[a].longitud],{icon: century21icon});
          marker.bindPopup(
            "<p>" + this.arrayGlobal[a].ciudad + "</p><p>Poblacion:" + this.arrayGlobal[a].poblacion + "</p><p>Total Ventas: "+ this.arrayGlobal[a].totalVentas +"€</p><p>Porcentaje Ventas: "+ this.arrayGlobal[a].porcentajeVentas +"%</p><p>Venta por habitante: "+ this.arrayGlobal[a].ventaPorHabitante+"€</p>"
          );
          marker.addTo(map);

          for(let b = 0 ; b < this.json.features.length ; b++){

            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante <= 10){
              L.geoJSON(this.json.features[b], {style: stilo1}).addTo(map);
            }
            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante > 15  && this.arrayGlobal[a].ventaPorHabitante <= 20){
              L.geoJSON(this.json.features[b], {style: stilo2}).addTo(map);
            }
            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante > 20  && this.arrayGlobal[a].ventaPorHabitante <= 25){
              L.geoJSON(this.json.features[b], {style: stilo3}).addTo(map);
            }
            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante > 25  && this.arrayGlobal[a].ventaPorHabitante <= 30){
              L.geoJSON(this.json.features[b], {style: stilo4}).addTo(map);
            }
            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante > 30  && this.arrayGlobal[a].ventaPorHabitante <= 35){
              L.geoJSON(this.json.features[b], {style: stilo5}).addTo(map);
            }
            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante > 35  && this.arrayGlobal[a].ventaPorHabitante <= 40){
              L.geoJSON(this.json.features[b], {style: stilo6}).addTo(map);
            }
            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante > 40  && this.arrayGlobal[a].ventaPorHabitante <= 45){
              L.geoJSON(this.json.features[b], {style: stilo7}).addTo(map);
            }
            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante > 45  && this.arrayGlobal[a].ventaPorHabitante <= 50){
              L.geoJSON(this.json.features[b], {style: stilo8}).addTo(map);
            }
            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante > 50  && this.arrayGlobal[a].ventaPorHabitante <= 55){
              L.geoJSON(this.json.features[b], {style: stilo9}).addTo(map);
            }
            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante > 55  && this.arrayGlobal[a].ventaPorHabitante < 65){
              L.geoJSON(this.json.features[b], {style: stilo10}).addTo(map);
            }
            if(this.arrayGlobal[a].cod_prov == this.json.features[b].properties['cod_prov'] && this.arrayGlobal[a].ventaPorHabitante >= 65){
              L.geoJSON(this.json.features[b], {style: stilo11}).addTo(map);
            }
          }

        }

      })


    });



  }

}
