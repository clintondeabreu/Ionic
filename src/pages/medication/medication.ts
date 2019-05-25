import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
@Component({
  selector: 'page-medication',
  templateUrl: 'medication.html'
})
export class MedicationPage {
  medications: any;
  medicationtypes: any;
  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.getMedications();
    this.getMedicationTypes();
  }
  // each medications data is retrieved from the api as well as the medication type
  getMedications() {
    this.dataProvider.getMedication()
    .then(data => {
    this.medications = data;
    console.log(this.medications);
    });
    }
    getMedicationTypes() {
    this.dataProvider.getMedicationType()
    .then(data => {
    this.medicationtypes = data;
    console.log(this.medicationtypes);
    });
    }
      // the search bar is implemeted here to search for the medication
    searchMedications(lookfor:string) {
      this.dataProvider.searchMedication(lookfor)
      .then(data => {
      this.medications = data;
      console.log(this.medications);
      });
      }
}
