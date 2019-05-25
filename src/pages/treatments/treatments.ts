import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'
@Component({
  selector: 'page-treatments',
  templateUrl: 'treatments.html'
})
export class TreatmentsPage {
  treatments: any;
  treatmenttypes: any;
  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.getTreatments();
    this.getTreatmentTypes();
  }
  getTreatments() {
    this.dataProvider.getTreatment()
    .then(data => {
    this.treatments = data;
    console.log(this.treatments);
    });
    }
  getTreatmentTypes() {
    this.dataProvider.getTreatmentType()
    .then(data => {
    this.treatmenttypes = data;
    console.log(this.treatmenttypes);
    });
    }
  searchTreatments(lookfor:string) {
    this.dataProvider.searchTreatment(lookfor)
    .then(data => {
    this.treatments = data;
    console.log(this.treatments);
    });
    }
}
