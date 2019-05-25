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
  // each treatement data is retrieved from the api as well as the tretament type
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
    // the search bar is implemeted here to search for the treatements
  searchTreatments(lookfor:string) {
    this.dataProvider.searchTreatment(lookfor)
    .then(data => {
    this.treatments = data;
    console.log(this.treatments);
    });
    }
}
