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
    center: L.latLng(47.482019, -1)
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

        let stilo1 = {color: "#79deff", weight: 5,opacity: 0.65}
        var stilo2 = {color: "#6fcff7",weight: 5,opacity: 0.65}
        var stilo3 = {color: "red",weight: 5,opacity: 0.65}
        var stilo4 = {color: "#5bb1e6",weight: 5,opacity: 0.65}
        var stilo5 = {color: "#51a3de",weight: 5,opacity: 0.65}
        var stilo6 = {color: "#4794d5",weight: 5,opacity: 0.65}
        var stilo7 = {color: "#3c85cd",weight: 5,opacity: 0.65}
        var stilo8 = {color: "#3276c5",weight: 5,opacity: 0.65}
        var stilo9 = {color: "#2867bc",weight: 5,opacity: 0.65}
        var stilo10 = {color: "#1e58b4",weight: 5,opacity: 0.65}
        var stilo11 = {color: "#144aac",weight: 5,opacity: 0.65}
        var stilo12 = {color: "#0a3ba3",weight: 5,opacity: 0.65}
        var stilo13 = {color: "#002c9b",weight: 5,opacity: 0.65}

        this.arrayGlobal = data

        var century21icon = L.icon({
          iconUrl: 'https://orion91.com/img/isologo_orion91.png',
          iconSize: [30, 20]
          });

        for(let a = 0 ; a < this.arrayGlobal.length ; a++){

          if(this.arrayGlobal[a].ventaPorHabitante < 15){
            L.geoJSON(this.json.features[a], {style: stilo1}).addTo(map);
          }

          console.log("Ciudad -> " + this.arrayGlobal[a].ciudad)
          console.log("Venta por Habitante -> " + this.arrayGlobal[a].ventaPorHabitante);


          // switch(this.arrayGlobal[a].ventaPorHabitante){
          //   case :

          //     break;
          //   case this.arrayGlobal[a].ventaPorHabitante >= 30 && this.arrayGlobal[a].ventaPorHabitante < 15:
          //     L.geoJSON(this.json.features[a], {style: stilo2}).addTo(map);
          //     break;
          //   case this.arrayGlobal[a].ventaPorHabitante >= 45 && this.arrayGlobal[a].ventaPorHabitante < 60:
          //     L.geoJSON(this.json.features[a], {style: stilo3}).addTo(map);
          //     break;
          //   case this.arrayGlobal[a].ventaPorHabitante >= 60 && this.arrayGlobal[a].ventaPorHabitante < 75:
          //     L.geoJSON(this.json.features[a], {style: stilo4}).addTo(map);
          //     break;
          //   case this.arrayGlobal[a].ventaPorHabitante >= 75 && this.arrayGlobal[a].ventaPorHabitante < 90:
          //     L.geoJSON(this.json.features[a], {style: stilo5}).addTo(map);
          //     break;
          //   case this.arrayGlobal[a].ventaPorHabitante >= 90 && this.arrayGlobal[a].ventaPorHabitante < 105:
          //     L.geoJSON(this.json.features[a], {style: stilo6}).addTo(map);
          //     break;
          //   case this.arrayGlobal[a].ventaPorHabitante >= 105 && this.arrayGlobal[a].ventaPorHabitante < 120:
          //     L.geoJSON(this.json.features[a], {style: stilo7}).addTo(map);
          //     break;
          //   case this.arrayGlobal[a].ventaPorHabitante >= 120 && this.arrayGlobal[a].ventaPorHabitante < 135:
          //     L.geoJSON(this.json.features[a], {style: stilo8}).addTo(map);
          //     break;
          //   case this.arrayGlobal[a].ventaPorHabitante >= 150 && this.arrayGlobal[a].ventaPorHabitante < 165:
          //     L.geoJSON(this.json.features[a], {style: stilo9}).addTo(map);
          //     break;
          //   case this.arrayGlobal[a].ventaPorHabitante >= 165:
          //     L.geoJSON(this.json.features[a], {style: stilo10}).addTo(map);
          //     break;
          // }

          // if(this.arrayGlobal[a].ventaPorHabitante < 15){}
          // if(this.arrayGlobal[a].ventaPorHabitante > 15 && this.arrayGlobal[a].ventaPorHabitante < 30){}
          // if(this.arrayGlobal[a].ventaPorHabitante >= 30 && this.arrayGlobal[a].ventaPorHabitante < 45){}
          // if(this.arrayGlobal[a].ventaPorHabitante >= 45  && this.arrayGlobal[a].ventaPorHabitante < 60){}
          // if(this.arrayGlobal[a].ventaPorHabitante >= 60  && this.arrayGlobal[a].ventaPorHabitante < 75){}
          // if(this.arrayGlobal[a].ventaPorHabitante >= 75  && this.arrayGlobal[a].ventaPorHabitante < 90){}
          // if(this.arrayGlobal[a].ventaPorHabitante >= 90 && this.arrayGlobal[a].ventaPorHabitante < 105){}
          // if(this.arrayGlobal[a].ventaPorHabitante >= 105 && this.arrayGlobal[a].ventaPorHabitante < 120){}
          // if(this.arrayGlobal[a].ventaPorHabitante >= 120 && this.arrayGlobal[a].ventaPorHabitante < 135){}
          // if(this.arrayGlobal[a].ventaPorHabitante >= 135 && this.arrayGlobal[a].ventaPorHabitante < 150){}
          // if(this.arrayGlobal[a].ventaPorHabitante >= 150 && this.arrayGlobal[a].ventaPorHabitante < 160){L.geoJSON(this.json.features[a], {style: stilo11}).addTo(map);}
          // if(this.arrayGlobal[a].ventaPorHabitante >= 170 ){L.geoJSON(this.json.features[a], {style: stilo12}).addTo(map);}


          var location = [this.arrayGlobal[a].latitud, this.arrayGlobal[a].longitud];
          var marker = L.marker([this.arrayGlobal[a].latitud, this.arrayGlobal[a].longitud],{icon: century21icon});
          marker.bindPopup(
            "<p>Ciudad:" + this.arrayGlobal[a].ciudad + "</p><p>Poblacion:" + this.arrayGlobal[a].poblacion + "</p><p>Total Ventas: "+ this.arrayGlobal[a].totalVentas +"€</p><p>Porcentaje Ventas: "+ this.arrayGlobal[a].porcentajeVentas +"</p><p>Venta por habitante: "+ this.arrayGlobal[a].ventaPorHabitante+"</p>"
          );
          marker.addTo(map);

        }

      })


    });



  }

}
