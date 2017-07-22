import { Injectable } from '@angular/core';
import { StorageService } from "./storage.service";

@Injectable()
export class CalculatorService {

  constructor(private ts: StorageService) { }

  getWithoutVat(z){
    try{
      let x = 0;
      let data = JSON.parse(this.ts.getData());
      for(let i = 0; i < data.length; i++){
        if( data[i]["subHeader"] == z ){
          if( data[i]["cOrD"] == "debit" ){
            x -= (data[i]["money"] / (1 + (data[i]["vat"])/100));
          }else{
            x += (data[i]["money"] / (1 + (data[i]["vat"])/100));
          }
        }
      } return Math.round(x * 100) / 100;
    } catch(err){ return 0; }
  }

  getWithVat(z){
    try{
      let x = 0;
      let data = JSON.parse(this.ts.getData());
      for(let i = 0; i < data.length; i++){
        if( data[i]["subHeader"] == z ){
          if(data[i]["cOrD"]=="debit"){
            x -= data[i]["money"];
          }else{
            x += data[i]["money"];
          }
        }
      } return Math.round(x * 100) / 100;
    } catch(err){ return 0; }
  }

  getWithoutVat2(y, z){

  }

  getWithVat2(z, y){

  }

}
