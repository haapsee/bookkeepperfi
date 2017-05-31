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

  enpack: any;
  lan: any = "en";
  strings: any;
  asdf: String = "asdf";
  alvs: any = [ 0, 10, 14, 24 ];
  items: any = [
    {
      sell: 123.45,
      vat: 24,
      gategory: "Turnover (net sales)"
    },{
      sell: 23.45,
      vat: 14,
      gategory: "External services"
    },
  ];

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
  }

  ngOnInit() {
  }

}
