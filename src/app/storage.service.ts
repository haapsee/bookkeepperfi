import { Injectable } from '@angular/core';
import { Init } from "./init-storage";
import { Item } from "./item";

@Injectable()
export class StorageService extends Init {

  items:any;

  constructor() {
    super();
  }

  save(x){
    this.write(JSON.stringify(x));
  }

  getData(){
    return this.load();
  }

  writeT(x){
    this.writeTotal(x);
  }

  loadT(){
    super.loadTotal();
  }

}
