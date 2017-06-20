import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanpackService } from "../lanpack.service";
import { StorageService } from "../storage.service";
import { AssetsColumnComponent } from "../assets-column/assets-column.component";
import { ProfitcolumnComponent } from "../profitcolumn/profitcolumn.component";

@Component({
  selector: 'app-softwarepage',
  templateUrl: './softwarepage.component.html',
  providers: [LanpackService, StorageService, AssetsColumnComponent],
  styleUrls: ['./softwarepage.component.css']
})
export class SoftwarepageComponent implements OnInit {


  // form data
  creditordebit:any;
  itemHeader: any;
  itemSubHeader: any;
  alv:any;
  costsell:any;


  // language data
  enpack: any;
  lan: any = "en";
  strings: any;
  alvs: any = [ 0, 10, 14, 24 ];
  items: any = [];

  constructor(private ts: StorageService, private router: Router, private lanservice: LanpackService,
    private assetsCol: AssetsColumnComponent) {
    /*if(this.router.url == "/se/software"){
      this.language = "sweden";
    }else if(this.router.url == "/fi/software"){
      this.language = "suomi";
    }else{
      this.language = "english";
    }/**/
    //console.log(this.strings);
    //console.log(this.router.url.split("/"));
    this.strings = this.lanservice.getPack(this.lan);
    this.enpack = this.lanservice.getPack("en");

    this.timeOutFunction();
  }

  buttonDisabled(){
    if(this.alv==undefined||this.costsell==undefined||
      this.itemHeader==undefined||this.itemSubHeader==undefined){
      return "disabled";
    }else{
      return "warning";
    }
  }

  timeOutFunction(){
    console.log(this.creditordebit);

    if(this.creditordebit == "credit"){

    }

    setTimeout(() => {
      this.timeOutFunction();
    }, 1000);
  }

  buttonClicked(){
    if(this.buttonDisabled()!="disabled"){
      this.items.push("lol");
      this.alv=undefined;
      this.costsell=undefined;
      this.itemSubHeader=undefined;
      this.itemHeader=undefined;
      this.creditordebit=undefined;
    }
  }

  ngOnInit() { }

}
