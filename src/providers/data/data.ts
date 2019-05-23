import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
  apiUrl = 'http://localhost:65076/';
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  getSymptom() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl+'/api/Symptom/getSymptoms').subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
    }
    getSymptomType() {
      return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/SymptomType/getSymptomTypes').subscribe(data => {
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
      }
}
