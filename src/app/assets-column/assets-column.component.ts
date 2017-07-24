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
          if( data[i]["subHeader"] == y && data[i]["header"] == z ){
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
      return this.getSalesOfOf("debtors", "investments") +
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
        } return Math.round(x * -100) / 100;
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
        } return Math.round(x * 100) / 100 + this.getSalesOf("vatDebt");
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

    getCapitalAndReserves(){
      try{
        let arr = ["subscribedCapital", "revaluationReserve", "otherReserves",
          "retairnedEarnings", "profitLossOfTheFinancialYear"];
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(arr.includes(data[i]["subHeader"])){
        if(data[i]["cOrD"]=="debit"){ x -= (data[i]["money"] / (1 + (data[i]["vat"])/100)); }
        else{ x += (data[i]["money"] / (1 + (data[i]["vat"])/100)); }
          }
        } return 1 * (Math.round(x * 100) / 100 + this.getProfLossFinancialYear());
      }catch(err){ return 0; }
    }

    getEALShort(){
      return this.getSalesOf("loansFromCreditInstitutions") +
        this.getTradeCreditors() + this.getVatDebt() +
        this.getSalesOf("otherCreditors");
    }

    getCreditors(){
      return this.getEALShort() + this.getSalesOfOf("loanOrDebt", "longterm");
    }

    getEAL(){
      return this.getCreditors() + this.getCapitalAndReserves() +
        this.getSalesOf("appropriations") + this.getSalesOf("provisions");
    }

    getEquityTotal(){
      return this.getCapitalAndReserves() + this.getSalesOf("approprations") +
        this.getSalesOf("provisions") + this.getCreditors();
    }

    ngOnInit() { }






    /*
    included from profit column
    /**/

    getOtherOperatingExpenses(){
      try{
        let arr = ["optionalStaffExpenses", "apartmentExpenses", "vechileExpenses",
          "computerDeviceAndSoftware", "shorttermEquipment", "travelExpenses",
          "representationExpenses", "salesAndMarketingExpenses", "researchAndDevelopmentExpenses",
          "admistrationExpenses", "otherOperatingExpenses"];
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(arr.includes(data[i]["subHeader"])){
            if(data[i]["cOrD"]=="debit"){
              x -= (data[i]["money"] / (1 + data[i]["vat"]/100));
            }else{
              x += (data[i]["money"] / (1 + data[i]["vat"]/100));
            }
          }
        } return Math.round(x * 100) / 100;
      }catch(err){ return 0; }
    }

    getPurchasesDuring(){
      try{
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(data[i]["subHeader"]=="purchasesDuringTheFinancialYearTradeCreditors"||
              data[i]["subHeader"]=="purchasesDuringTheFinancialYear"){
            if(data[i]["cOrD"]=="debit"){ x -= (data[i]["money"] / (1 + data[i]["vat"]/100)); }
            else{ x += (data[i]["money"] / (1 + data[i]["vat"]/100)); }
          }
        } return Math.round(x * 100) / 100;
      } catch(err){ return 0; }
    }

    getVariationsInStock(){
      try{
        let x = 0;
        let data = JSON.parse(this.ts.getData());
        for(let i = 0; i < data.length; i++){
          if(data[i]["subHeader"]=="stocks"){
            if(data[i]["cOrD"]=="debit"){ x -= data[i]["money"]; }
            else{ x += data[i]["money"]; }
          }
        } return Math.round(x * 100) / 100 + this.getSalesOf("variationsInStock");
      } catch(err){ return 0; }
    }

    getRawMaterialsAndConsumables(){
      return this.getVariationsInStock() + this.getPurchasesDuring();
    }

    getRawMaterialsAndServices(){
      return this.getRawMaterialsAndConsumables() +
        this.getSalesOf("externalServices");
    }

    getSocialSecurityExpenses(){
      return this.getSalesOf("pensionExpenses") +
        this.getSalesOf("otherSocialSecurityExpenses");
    }

    getStaffExpenses(){
      return this.getSocialSecurityExpenses() + this.getSalesOf("wagesAndSalaries");
    }

    getDARIV(){
      return Math.round((this.getSalesOf("depreciationsAccordingToPlan") +
        this.getSalesOf("reductionsInValue")) * 100) / 100;
    }

    getOperatingProftiLoss(){
      return Math.round((this.getSalesOf("turnoverNetSales") +
        this.getSalesOf("turnoverTradeDebtors") +
        this.getSalesOf("otherOperatingIncome") + this.getRawMaterialsAndServices() +
        this.getStaffExpenses() + this.getDARIV() +
        this.getOtherOperatingExpenses()) * 100) / 100;
    }

    getProfitLossB4AppropriationsAndTaxes(){
      return Math.round((this.getOperatingProftiLoss() +
        this.getSalesOf("financialIncome") +
        this.getSalesOf("financialExpenses")) * 100) / 100;
    }

    getProfLossFinancialYear(){
      let num: number = Math.round((this.getProfitLossB4AppropriationsAndTaxes() +
        this.getSalesOf("appropriationsIncome") + this.getSalesOf("appropriationsExpenses") +
        this.getSalesOf("incomeTaxes")) * 100) / 100;
      return -1 * num;
    }
}
