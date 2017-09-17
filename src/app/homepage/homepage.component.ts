import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  flags: any = [{
      shortened: "fi",
      link: "/fi"
    },{
      shortened: "gb",
      link: "/en"
    }, {
      shortened: "se",
      link: "/se" }];

  constructor(private router: Router) {  }

  ngOnInit() { }

}
