import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LanpackService } from "../lanpack.service";
import { StorageService } from "../storage.service";

@Component({
  selector: 'assetscolumn',
  templateUrl: './assets-column.component.html',
  providers: [LanpackService],
  styleUrls: ['./assets-column.component.css'],
  inputs: ["strings", "enpack"]
})
export class AssetsColumnComponent implements OnInit {

    @Input() strings: any;
    @Input() enpack: any;

    constructor(private ts: StorageService) { }

    getSalesOf(y){
      try{
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(data[i]["subHeader"]==y){
            if(data[i]["cOrD"]=="debit"){
              x -= (data[i]["money"] * ((100 - data[i]["vat"])/100));
            }else{
              x += (data[i]["money"] * ((100 - data[i]["vat"])/100));
            }
          }
        } return Math.round(x * 100) / 100;
      } catch(err){ return 0; }
    }


    debtors: Boolean = true;
    toggleDebtors(){
      if(this.debtors==true){
        this.debtors=false;
        return false;
      }else{
        this.debtors=true;
        return true;
      }
    }

    getSalesOfOf(z, y){
      try{
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          console.log(data[i]["header"] + " " + z);
          console.log((data[i]["subHeader"] == y) + " " + (data[i]["header"] == z));
          if(data[i]["subHeader"]==y&&data[i]["header"]==z){
            if(data[i]["cOrD"]=="debit"){
              x -= (data[i]["money"] * ((100 - data[i]["vat"])/100));
            }else{
              x += (data[i]["money"] * ((100 - data[i]["vat"])/100));
            }
          }
        } return Math.round(x * 100) / 100;
      } catch(err){ return 0; }
    }

    ngOnInit() { }
}
