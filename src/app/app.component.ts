import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LeukemiaTypesPage } from '../pages/leukemia-types/leukemia-types';
import { SymptomsPage } from '../pages/symptoms/symptoms';
import { RiskFactorsPage } from '../pages/risk-factors/risk-factors';
import { TreatmentsPage } from '../pages/treatments/treatments';
import { MedicationPage } from '../pages/medication/medication';
import { SelfDiagnosisPage } from '../pages/self-diagnosis/self-diagnosis';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToLeukemiaTypes(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LeukemiaTypesPage);
  }goToSymptoms(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SymptomsPage);
  }goToRiskFactors(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RiskFactorsPage);
  }goToTreatments(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TreatmentsPage);
  }goToMedication(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MedicationPage);
  }goToSelfDiagnosis(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SelfDiagnosisPage);
  }
}
