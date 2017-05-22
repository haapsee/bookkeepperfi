import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanpackService } from "../lanpack.service";

@Component({
  selector: 'profitcolumn',
  templateUrl: './profitcolumn.component.html',
  providers: [LanpackService],
  styleUrls: ['./profitcolumn.component.css']
})
export class ProfitcolumnComponent implements OnInit {
  language: any;
  enpack: any;
  lan: any = "en";
  strings: any;

  constructor(private router: Router, private lanservice: LanpackService) {
    /*if(this.router.url == "/se/software"){
      this.language = "sweden";
    }else if(this.router.url == "/fi/software"){
      this.language = "suomi";
    }else{
      this.language = "english";
    }/**/
    this.strings = this.lanservice.getPack(this.lan);
    this.enpack = this.lanservice.getPack("en");
    //console.log(this.strings);
    //console.log(this.router.url.split("/"));
  }

  setLanpack(lanpack: any){
    this.strings = lanpack;
  }

  getLanpack(){
    console.log(this.strings);
  }

  ngOnInit() {
  }

}
