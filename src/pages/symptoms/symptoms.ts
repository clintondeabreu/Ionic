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
    getItems(ev:any) {
      this.show();
      var val = ev.target.value;
       if (val && val.trim() != '') {
       this.symptoms = (this.symptoms).filter((item) => {
   
       return ((item.symptoms).toLowerCase().indexOf(val.toLowerCase()) > -1);
       });
       }
       }
}
