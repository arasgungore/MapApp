import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from '../../services/google-maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private googleMapsService: GoogleMapsService) { }

  ngOnInit(): void {
    this.googleMapsService.initMap();
    this.googleMapsService.showCurrentLocation();
  }

  zoomIn(): void {
    this.googleMapsService.zoomIn();
  }

  zoomOut(): void {
    this.googleMapsService.zoomOut();
  }

  calculateAndDisplayRoute(): void {
    this.googleMapsService.calculateAndDisplayRoute();
  }

  getDistance(): void {
    this.googleMapsService.calculateDistance();
  }
}
