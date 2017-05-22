import { Injectable } from '@angular/core';
import { Init } from "./init-storage";

@Injectable()
export class StorageService extends Init {

  constructor() {
    super();

    this.load();
    this.write();

  }
}
