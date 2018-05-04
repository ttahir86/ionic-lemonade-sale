import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';
import { HomeListPage } from '../home-list/home-list';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isLoaded: boolean = false;
  dir: any = {};
  public isSignedIn: boolean = false;
  public labelOptions = {
    color: 'red',
    fontFamily: '',
    fontSize: '18px',
    fontWeight: 'bold',
    text: ' ',
  }

  user_lat: number = 0;
  user_lng: number = 0;

  map_icon: any =
    {
      0:  {  
            url: './assets/imgs/lemon.png',
            scaledSize: {
            height: 30,
            width: 30},
          },
    
      1: {
          url: './assets/imgs/cookie.png',
          scaledSize: {
          height: 30,
          width: 30}
        },

      2: {
        url: './assets/imgs/girl-scouts.png',
        scaledSize: {
          height: 55,
          width: 55}
      }
    }
  


  public businesses: any[] = [
    { id: 0, name: 'Julie\'s lemonade', lat: 40.211511, lng: -74.679665, type: 0 }, 
    { id: 1, name: 'Timmy\'s bake shop', lat: 40.211511, lng: -74.689665, type: 1 },
    { id: 2, name: 'Yum Yums', lat: 40.219111, lng: -74.684677, type: 1 },
    { id: 3, name: 'Ruby\'s Baked Goods', lat: 40.211911, lng: -74.684665, type: 2 },
    { id: 4, name: 'Lemonade outta Lemons', lat: 40.2531403, lng: -74.684665, type: 0 }
  ];

  constructor(public navCtrl: NavController, private platform: Platform, private geolocation: Geolocation) {
    console.log("constructor start");
    // platform.ready().then(() => {
    //   console.log("platform ready");
    //   let GPSoptions = { timeout: 10000, enableHighAccuracy: false, maximumAge: 0 };
    //   // get current position
    //   geolocation.getCurrentPosition(GPSoptions).then(pos => {
    //     this.user_lat = pos.coords.latitude
    //     this.user_lng = pos.coords.longitude
    //     console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
    //   }).catch((error) => {
    //     // console.log('Error getting location', error);
    //     console.log(error);
    //     console.log('Error w/ getPosition: ' + JSON.stringify(error));
    //     // this.getUserLocation();
    //   });

    // });

    console.log("constructor end");
  }

  ionViewDidLoad(){
    this.platform.ready().then(() => {
      this.getUserLocation();
      //this.watchUser();
    })
    
    
  }
  

  getUserLocation() {
    console.log('getUserLocation() start');
    //let GPSoptions = {timeout: 100000, enableHighAccuracy: false, maximumAge: 0};
    let GPSoptions = {enableHighAccuracy: true, maximumAge: 0 };

    this.geolocation.getCurrentPosition(GPSoptions)
    .then((position) => {
      this.handleResponse(position)
    })
    .catch((error) => {
      console.log('Error getting location', error);
      // this.getUserLocation();
    },
  
  );
    console.log('getUserLocation() end');

  }

  handleResponse(position: any){
    this.user_lat = position.coords.latitude
    this.user_lng = position.coords.longitude
    this.dir = {
      origin: { lat: this.user_lat, lng: this.user_lng},
      destination: { lat: 40.2531403, lng: -74.684665 }
      
    }
    this.isLoaded = true;
    console.log(this.user_lat);
    // alert('Latitude: ' + position.coords.latitude + '\n' +
    //   'Longitude: ' + position.coords.longitude + '\n' +
    //   'Altitude: ' + position.coords.altitude + '\n' +
    //   'Accuracy: ' + position.coords.accuracy + '\n' +
    //   'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
    //   'Heading: ' + position.coords.heading + '\n' +
    //   'Speed: ' + position.coords.speed + '\n' +
    //   'Timestamp: ' + position.timestamp + '\n');
  }

  goToListView(){
    // this.getUserLocation();
    this.navCtrl.push(HomeListPage);
  }
  goToSignUpPage(){
    this.navCtrl.push(SignUpPage);
  }

  watchUser(){
    let watch = this.geolocation.watchPosition();
    watch.subscribe((position) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      this.user_lat = position.coords.latitude
      this.user_lng = position.coords.longitude
      console.log("lat:"  + this.user_lat);
    });
  }
}
