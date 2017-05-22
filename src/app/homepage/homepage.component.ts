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
      link: "/fi/software"
    }, {
      shortened: "gb",
      link: "/en/software"
    }, {
      shortened: "se",
      link: "/se/software" } ];

    text: any = "test/1";

  constructor(private router: Router) {
      console.log(this.router.url);
      console.log(this.text.split("/"));
  }

  ngOnInit() {
  }

}
