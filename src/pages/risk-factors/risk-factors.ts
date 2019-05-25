import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data'
@Component({
  selector: 'page-risk-factors',
  templateUrl: 'risk-factors.html'
})
export class RiskFactorsPage {
  riskfactors: any;
  riskfactortypes: any;
  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    this.getRiskFactors();
    this.getRiskFactorTypes();
  }
  // each risk factor data is retrieved from the api as well as the risk factor type

  getRiskFactors() {
    this.dataProvider.getRiskFactor()
    .then(data => {
    this.riskfactors = data;
    console.log(this.riskfactors);
    });
    }
    getRiskFactorTypes() {
    this.dataProvider.getRiskFactorType()
    .then(data => {
    this.riskfactortypes = data;
    console.log(this.riskfactortypes);
    });
    }
    // the search bar is implemeted here to search for the risk factors
    searchRiskFactors(lookfor:string) {
      this.dataProvider.searchRiskFactor(lookfor)
      .then(data => {
      this.riskfactors = data;
      console.log(this.riskfactors);
      });
      }
}
