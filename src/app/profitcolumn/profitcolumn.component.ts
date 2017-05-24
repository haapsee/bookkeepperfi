import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanpackService } from "../lanpack.service";

@Component({
  selector: 'profitcolumn',
  templateUrl: './profitcolumn.component.html',
  providers: [LanpackService],
  styleUrls: ['./profitcolumn.component.css'],
  inputs: ["strings", "enpack"]
})
export class ProfitcolumnComponent implements OnInit {

  constructor(private router: Router, private lanservice: LanpackService) { }

  ngOnInit() { }

}
