import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  infos: any;
  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.getInfos();
  }
  getInfos() {
    this.dataProvider.getAdditionalInfo()
    .then(data => {
    this.infos = data;
    console.log(this.infos);
    });
    }
}
