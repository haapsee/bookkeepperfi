export class Item {

  money: any;
  vat: any;
  header: any;
  subHeader: any;

  Item(m,v,h,s){
    this.money = m;
    this.vat = v;
    this.header = h;
    this.subHeader = s;
  }

  getItem(){
    console.log("Money : " + this.money);
    console.log("vat : " + this.vat);
    console.log("header : " + this.header);
    console.log("subHeader : " + this.subHeader);
  }

}
