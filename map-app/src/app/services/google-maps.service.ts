import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private map: any;
  private directionsService: any;
  private directionsRenderer: any;
  private timezoneService: any;

  constructor() {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.timezoneService = new google.maps.TimeZoneService();
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 0, lng: 0 },
      zoom: 2
    });
    this.directionsRenderer.setMap(this.map);
  }

  showCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.map.setCenter(pos);
        this.map.setZoom(15);
        new google.maps.Marker({
          position: pos,
          map: this.map,
          title: 'Your Location'
        });

        this.showDateAndTime(pos);
      }, () => {
        // Handle location error
      });
    } else {
      // Browser doesn't support Geolocation
    }
  }

  showDateAndTime(position: any): void {
    this.timezoneService.getTimeZone(
      { location: position, timestamp: new Date().getTime() / 1000 },
      (result: any, status: any) => {
        if (status === 'OK') {
          const date = new Date(result.rawOffset * 1000 + result.dstOffset * 1000);
          const timeZone = result.timeZoneName;

          console.log(`Current Date and Time: ${date.toLocaleString()} (${timeZone})`);
          // Update your UI with the date and timezone information
        } else {
          // Handle timezone error
        }
      }
    );
  }

  zoomIn(): void {
    const currentZoom = this.map.getZoom();
    this.map.setZoom(currentZoom + 1);
  }

  zoomOut(): void {
    const currentZoom = this.map.getZoom();
    this.map.setZoom(currentZoom - 1);
  }

  calculateAndDisplayRoute(): void {
    const start = { lat: 37.7749, lng: -122.4194 }; // Replace with user's current location
    const end = { lat: 34.0522, lng: -118.2437 };   // Replace with destination coordinates

    this.directionsService.route(
      {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING // Change to desired travel mode
      },
      (response: any, status: any) => {
        if (status === 'OK') {
          this.directionsRenderer.setDirections(response);
          this.showRoutingInstructions(response.routes[0].legs[0]);
        } else {
          // Handle route error
        }
      }
    );
  }

  calculateDistance(): void {
    const start = { lat: 37.7749, lng: -122.4194 }; // Replace with user's current location
    const end = { lat: 34.0522, lng: -118.2437 };   // Replace with destination coordinates

    const distanceMatrixService = new google.maps.DistanceMatrixService();

    distanceMatrixService.getDistanceMatrix({
      origins: [start],
      destinations: [end],
      travelMode: google.maps.TravelMode.DRIVING, // Change to desired travel mode
      unitSystem: google.maps.UnitSystem.METRIC,
    }, (response: any, status: any) => {
      if (status === 'OK') {
        const distance = response.rows[0].elements[0].distance.text;
        console.log(`Distance: ${distance}`);
      } else {
        // Handle distance calculation error
      }
    });
  }

  showRoutingInstructions(leg: any): void {
    const instructions = leg.steps.map((step: any) => step.instructions).join('<br>');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `<div class="routing-instructions">${instructions}</div>`;
    document.body.appendChild(overlay);
  }
}
