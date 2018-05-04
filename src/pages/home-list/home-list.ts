import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the HomeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home-list',
  templateUrl: 'home-list.html',
})
export class HomeListPage {
  map_icon: any =
    {
      0: {
        url: './assets/imgs/lemonade.png',
        scaledSize: {
          height: 50,
          width: 20
        },
      },

      1: {
        url: './assets/imgs/cookie2.png',
        scaledSize: {
          height: 30,
          width: 30
        }
      },

      2: {
        url: './assets/imgs/girl-scouts.png',
        scaledSize: {
          height: 55,
          width: 55
        }
      }
    }
  public businesses: any[] = [
    { id: 0, name: 'Julie\'s lemonade', lat: 40.211511, lng: -74.679665, type: 0 },
    { id: 1, name: 'Timmy\'s bake shop', lat: 40.211511, lng: -74.689665, type: 1 },
    { id: 2, name: 'Yum Yums', lat: 40.219111, lng: -74.684677, type: 1 },
    { id: 3, name: 'Ruby\'s Baked Goods', lat: 40.211911, lng: -74.684665, type: 2 },
    { id: 4, name: 'Lemonade outta Lemons', lat: 40.2531403, lng: -74.684665, type: 0 }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeListPage');
  }

  goToMapView(){
    this.navCtrl.pop();
  }

  goToSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }

}
