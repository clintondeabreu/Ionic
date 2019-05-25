import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'

@Component({
  selector: 'page-symptoms',
  templateUrl: 'symptoms.html'
})
export class SymptomsPage {
  show:any;
  symptoms: any;
  symptomtypes: any;
  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.getSymptoms();
    this.getSymptomTypes();
  }
  // each symptoms data is retrieved from the api as well as the symtpoms type
  getSymptoms() {
    this.dataProvider.getSymptom()
    .then(data => {
    this.symptoms = data;
    console.log(this.symptoms);
    });
    }
  getSymptomTypes() {
    this.dataProvider.getSymptomType()
    .then(data => {
    this.symptomtypes = data;
    console.log(this.symptomtypes);
    });
    }
      // the search bar is implemeted here to search for the symptoms
  searchSymptoms(lookfor:string) {
    this.dataProvider.searchSymptom(lookfor)
    .then(data => {
    this.symptoms = data;
    console.log(this.symptoms);
    });
    }
}
