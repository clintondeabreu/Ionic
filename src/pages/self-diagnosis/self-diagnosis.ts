import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'page-self-diagnosis',
  templateUrl: 'self-diagnosis.html'
})
export class SelfDiagnosisPage {
  counter : number = 0;
  message : string = "";
  public isToggled: boolean;
  constructor(public navCtrl: NavController, private alertController:AlertController) {
  }
  // a counter to see if the results are in fact leukima or not
  public notify() {
    this.counter = this.counter +1;
  }
  public score(){
    if(this.counter <= 3){
      this.message = "The probability of Leukemia is unlikely.";
    }
    else{
      this.message = "You have the major symptoms of Leukemia, consult a doctor.";
    }
    return this.message;
  }
  // an alert to notify the user what their results are 
openToDoAlert(){
  let addToDoAlert = this.alertController.create({
    title : "Self Diagnosis Response",
    message: this.score(),
    buttons:[
    {
    text: "Okay"
    }]
  });
  addToDoAlert.present()
}
}
