import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LanpackService } from "../lanpack.service";

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

    constructor() { }

    ngOnInit() { }
}
