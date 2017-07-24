import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanpackService } from "../lanpack.service";
import { StorageService } from "../storage.service";

@Component({
  selector: 'profitcolumn',
  templateUrl: './profitcolumn.component.html',
  providers: [LanpackService],
  styleUrls: ['./profitcolumn.component.css'],
  inputs: ["strings", "enpack"]
})
export class ProfitcolumnComponent implements OnInit {

  constructor(private router: Router, private lanservice: LanpackService, private ts: StorageService) { }

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


  getSalesOfOf(z, y){
    try{
      let x = 0;
      let data = JSON.parse(this.ts.getData());
      for(let i = 0; i < data.length; i++){
        console.log(data[i]["header"] + " " + z);
        console.log((data[i]["subHeader"] == y) + " " + (data[i]["header"] == z));
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
    this.ts.writeT(num);
    return num;
  }

  ngOnInit() { }

}
