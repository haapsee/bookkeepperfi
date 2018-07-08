import { Component } from '@angular/core';

export class Item {

  money: any;
  vat: any;
  header: any;
  subHeader: any;
  cOrD: any;
  index: any;

  constructor(m,v,h,s, c, i){
    this.money = m;
    this.vat = v;
    this.header = h;
    this.subHeader = s;
    this.cOrD = c;
    this.index = i;
    this.getItem();
  }

  getItem(){
    // console.log("Money : " + this.money);
    // console.log("vat : " + this.vat);
    // console.log("header : " + this.header);
    // console.log("subHeader : " + this.subHeader);
    // console.log("credit / debit : " + this.cOrD);
  }

  setIndex(i){
    this.index = i;
  }

  getMoney(){ return this.money; }
  getVat(){ return this.vat; }
  getHeader(){ return this.header; }
  getSubHeader(){ return this.subHeader; }
  getCord(){ return this.cOrD; }
  getIndex(){ return this.index; }

}
