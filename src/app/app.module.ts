import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// All pages imported 
import { HomePage } from '../pages/home/home';
import { LeukemiaTypesPage } from '../pages/leukemia-types/leukemia-types';
import { SymptomsPage } from '../pages/symptoms/symptoms';
import { RiskFactorsPage } from '../pages/risk-factors/risk-factors';
import { TreatmentsPage } from '../pages/treatments/treatments';
import { MedicationPage } from '../pages/medication/medication';
import { SelfDiagnosisPage } from '../pages/self-diagnosis/self-diagnosis';

// Imported Http for provider
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LeukemiaTypesPage,
    SymptomsPage,
    RiskFactorsPage,
    TreatmentsPage,
    MedicationPage,
    SelfDiagnosisPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,       // Http Imported
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LeukemiaTypesPage,
    SymptomsPage,
    RiskFactorsPage,
    TreatmentsPage,
    MedicationPage,
    SelfDiagnosisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider            // Provider Imported
  ]
})
export class AppModule {}