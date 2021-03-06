import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataProvider {
  apiUrl = 'http://localhost:65076/';
  constructor(public http: HttpClient) {
    console.log('Hello DataProvider Provider');
  }
  getAdditionalInfo() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl+'/api/AdditionalInfo/getAdditionalInfo').subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
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
    searchSymptom(lookfor:string)
    {
      return new Promise(resolve => {
        this.http.post(this.apiUrl+'/api/Symptom/searchSymptom'+'?lookfor='+lookfor,lookfor).subscribe(data => {
        resolve(data);}, 
        err => {
        console.log(err);
        });
        });
    }
  getLukemia()
  {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/Illness/getIllness').subscribe(data => {
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
  }

  getLukemiaType()
  {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/IllnessType/getIllnessType').subscribe(data => {
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
  }
  searchLukemiaType(lookfor:string)
  {
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/api/IllnessType/searchIllnessType'+'?lookfor='+lookfor,lookfor).subscribe(data => {
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
  }
  getMedication()
  {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/Medication/getMedication').subscribe(data => {
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
  }

  getMedicationType()
  {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/api/MedicationType/getMedicationType').subscribe(data => {
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
  }
  searchMedication(lookfor:string)
  {
    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/api/Medication/searchMedication'+'?lookfor='+lookfor,lookfor).subscribe(data => {
      resolve(data);}, 
      err => {
      console.log(err);
      });
      });
  }
//RISK FACTORS ###################################################################################################

getRiskFactor()
{
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/api/RiskFactor/getRiskFactors').subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
}
getRiskFactorType()
{
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/api/RiskFactorType/getRiskFactorType').subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
}
searchRiskFactor(lookfor:string)
{
  return new Promise(resolve => {
    this.http.post(this.apiUrl+'/api/RiskFactor/searchRiskFactor'+'?lookfor='+lookfor,lookfor).subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
}
//treatments ###################################################################################################

getTreatment()
{
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/api/Treatment/getTreatments').subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
}

getTreatmentType()
{
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/api/TreatmentType/getTreatmentTypes').subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
}
searchTreatment(lookfor:string)
{
  return new Promise(resolve => {
    this.http.post(this.apiUrl+'/api/Treatment/searchTreatment'+'?lookfor='+lookfor,lookfor).subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
}
}
