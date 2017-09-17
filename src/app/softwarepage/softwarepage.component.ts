import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanpackService } from "../lanpack.service";
import { StorageService } from "../storage.service";
import { AssetsColumnComponent } from "../assets-column/assets-column.component";
import { ProfitcolumnComponent } from "../profitcolumn/profitcolumn.component";
import { Item } from "../item";

@Component({
  selector: 'app-softwarepage',
  templateUrl: './softwarepage.component.html',
  providers: [LanpackService, StorageService, AssetsColumnComponent],
  styleUrls: ['./softwarepage.component.css']
})
export class SoftwarepageComponent implements OnInit {

  version: any = {
    fi: "0.1.1",
    en: "0.1",
    se: "0.1"
  };

  // form data
  creditordebit:any;
  itemHeader: any;
  itemSubHeader: any;
  alv:any;
  costsell:any;
  hello:any = 1;
  closeall:any=false;


  // language data
  enpack: any;
  lan: any = "en";
  strings: any;
  alvs: any = [ 0, 10, 14, 24 ];
  items: any = [];

  constructor(private ts: StorageService, private router: Router, private lanservice: LanpackService,
    private assetsCol: AssetsColumnComponent) {
      this.ts.save(this.items);
    if(this.router.url == "/se"){
      this.lan = "se";
    }else if(this.router.url == "/fi"){
      this.lan = "fi";
    }else{
      this.lan = "en";
    }/**/
    //console.log(this.strings);
    //console.log(this.router.url.split("/"));
    this.strings = this.lanservice.getPack(this.lan);
    this.enpack = this.lanservice.getPack("en");

    console.log(this.ts.getCurrentVersion(this.lan));

    if(this.ts.getCurrentVersion(this.lan)==undefined||
        this.ts.getCurrentVersion(this.lan)!=this.version[this.lan]){
      this.ts.setCurrentVersion([this.version[this.lan], this.lan]);
      window.location.reload(true);
    }
  }

  loglog(){
    this.itemSubHeader=undefined;
  }

  buttonDisabled(){
    if(this.alv==undefined||this.costsell==undefined||
      this.itemHeader==undefined||this.itemSubHeader==undefined){
      return "disabled";
    }else{
      return "warning";
    }
  }

  remove(index){
    this.items.splice(index, 1);
    for(let i= 0; i < this.items.length; i++){ this.items[i].setIndex(i); }
    this.ts.save(this.items);
  }

  buttonClicked(){
    if(this.buttonDisabled()!="disabled"){
      let item = new Item(this.costsell, this.alv, this.itemHeader,
        this.itemSubHeader, this.creditordebit, this.items.length);

      this.items.push(item);


      this.alv=undefined;
      this.costsell=undefined;
      this.itemSubHeader=undefined;
      this.itemHeader=undefined;
      this.creditordebit=undefined;/**/
      this.ts.save(this.items);
    }
  }

  getVatAmount(item){
    return Math.round((item.getMoney() - Math.round((item.getMoney() /
      (1 + item.getVat() / 100)) * 100) / 100)* 100) /100;
  }


  ngOnInit() { }

}
