import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-loja-praca14',
  templateUrl: 'loja-praca14.html',
})
export class LojaPraca14Page {

  
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  startPosition: any;
  originPosition: string;
  destinationPosition: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geo: Geolocation) {
  }

  ionViewDidLoad() {
    this.initializeMap();
  }

  initializeMap() {
    this.startPosition = new google.maps.LatLng(-3.123093 , -60.012338);
 
    const mapOptions = {
      zoom: 15,
      center: this.startPosition,
      disableDefaultUI: true
    }
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.directionsDisplay.setMap(this.map);
 
    const marker = new google.maps.Marker({
      position: this.startPosition,
      map: this.map,
      draggable: true,
      
 
      //Animção
      animation: google.maps.Animation.DROP, // BOUNCE
    });
  }
 
  calculateRoute() {
    if (this.destinationPosition && this.originPosition) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.originPosition,
        destination: this.destinationPosition,
        travelMode: 'DRIVING'
      };
 
      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }
 
  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }

}
