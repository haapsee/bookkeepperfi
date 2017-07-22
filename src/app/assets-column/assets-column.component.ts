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
              x -= (data[i]["money"] / (1 + (data[i]["vat"])/100));
            }else{
              x += (data[i]["money"] / (1 + (data[i]["vat"])/100));
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
          if(data[i]["subHeader"]==y&&data[i]["header"]==z){
            if(data[i]["cOrD"]=="debit"){
              x -= (data[i]["money"] / (1 + (data[i]["vat"])/100));
            }else{
              x += (data[i]["money"] / (1 + (data[i]["vat"])/100));
            }
          }
        } return Math.round(x * 100) / 100;
      } catch(err){ return 0; }
    }

    getCashOrBank(){
      try{
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(data[i]["subHeader"]!="stocks" &&
            data[i]["subHeader"]!="turnoverTradeDebtors"&&
            data[i]["subHeader"]!="purchasesDuringTheFinancialYearTradeCreditors"){
            if(data[i]["cOrD"]=="credit"){
              x += data[i]["money"];
            }else{
              x -= data[i]["money"];
            }
          }
        } return Math.round(x * 100) / 100;
      } catch(err){ return 0; }
    }

    getTangibleAssets(){
      try{
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(data[i]["subHeader"]=="buildings" ||
              data[i]["subHeader"]=="machineryAndEquipment"){
            if(data[i]["cOrD"]=="debit"){ x -= (data[i]["money"] / (1 + (data[i]["vat"])/100)); }
            else{ x += (data[i]["money"] / (1 + (data[i]["vat"])/100)); }
          }
        } return Math.round(x * 100) / 100 + this.getSalesOfOf("longtermExpenses", "investments");
      } catch(err){ return 0; }
    }

    getTradeDebtors(){
      try{
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(data[i]["subHeader"]=="turnoverTradeDebtors"){
            if(data[i]["cOrD"]=="debit"){ x -= data[i]["money"]; }
            else{ x += data[i]["money"]; }
          }
        } return Math.round(x * 100) / 100;
      } catch(err){ return 0; }
    }

    getShorttermDebtors(){
      return this.getTradeDebtors() + this.getVatReceivables() +
          this.getSalesOf("otherReceivables");
    }

    getDebtors(){
      return this.getSalesOfOf("debtors", "longterm") + this.getShorttermDebtors();
    }

    getCurrentAssets(){
      return this.getSalesOfOf("cashOrBank", "investments") +
          this.getCashOrBank() + this.getSalesOf("stocks") + this.getDebtors();
    }

    getNonCurrentAssets(){
      return this.getSalesOf("intangibleAssets") + this.getTangibleAssets();
    }

    getAssets(){
      return this.getNonCurrentAssets() + this.getCurrentAssets();
    }

    getVatReceivables(){
      try{
        let arr = ["intangibleAssets", "buildings", "machineryAndEquipment", "purchasesDuringTheFinancialYear",
          "externalServices", "optionalStaffExpenses", "apartmentExpenses", "vechileExpenses",
          "computerDeviceAndSoftware", "shorttermEquipment", "travelExpenses", "representationExpenses",
          "salesAndMarketingExpenses", "researchAndDevelopmentExpenses", "administrationExpenses", "otherOperatingExpenses"];
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(arr.includes(data[i]["subHeader"])){
            x += data[i]["money"] - (data[i]["money"] / (1 + data[i]["vat"]/100));
          }
        } return Math.round(x * 100) / 100;
      }catch(err){ return 0; }
    }

    getVatDebt(){
      try{
        let arr = ["turnoverNetSales", "turnoverTradeDebtors", "otherOperatingIncome"];
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(arr.includes(data[i]["subHeader"])){
            x -= data[i]["money"] - (data[i]["money"] / (1 + data[i]["vat"]/100));
          }
        } return Math.round(x * 100) / 100;
      }catch(err){ return 0; }
    }

    getTradeCreditors(){
      try{
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(data[i]["subHeader"]=="purchasesDuringTheFinancialYearTradeCreditors"){
            if(data[i]["cOrD"]=="debit"){ x -= data[i]["money"]; }
            else{ x += data[i]["money"]; }
          }
        } return Math.round(x * 100) / 100 + this.getSalesOf("tradeCreditors");
      } catch(err){ return 0; }
    }

    ngOnInit() { }
}
