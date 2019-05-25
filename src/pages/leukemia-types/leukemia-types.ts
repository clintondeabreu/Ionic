import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'
@Component({
  selector: 'page-leukemia-types',
  templateUrl: 'leukemia-types.html'
})
export class LeukemiaTypesPage {
  lukemias: any;
  lukemiatypes: any;
  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.getLuemias();
    this.getLuemiaTypes();
  }
  getLuemias() {
    this.dataProvider.getLukemia()
    .then(data => {
    this.lukemias = data;
    console.log(this.lukemias);
    });
    }
  getLuemiaTypes() {
    this.dataProvider.getLukemiaType()
    .then(data => {
    this.lukemiatypes = data;
    console.log(this.lukemiatypes);
    });
    }
    searchLuemiaTypes(lookfor:string) {
      this.dataProvider.searchLukemiaType(lookfor)
      .then(data => {
      this.lukemiatypes = data;
      console.log(this.lukemiatypes);
      });
      }
}
