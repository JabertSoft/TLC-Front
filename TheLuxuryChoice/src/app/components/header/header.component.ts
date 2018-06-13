import { Component, OnInit, Input } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isSmall: boolean;

  constructor() {
    this.isSmall = false;
  }

  ngOnInit() {
  }

  // $("#menu-close").click(function(e) {
  //   e.preventDefault();
  //   $("#sidebar-wrapper").toggleClass("active");
  // });
  // $("#menu-toggle").click(function(e) {
  //   e.preventDefault();
  //   $("#sidebar-wrapper").toggleClass("active");
  // });

  menuClose() {
    $("#sidebar-wrapper").toggleClass("active");
    $("#menu-toggle").toggle();
  };

  menuToggle() {
    $("#sidebar-wrapper").toggleClass("active");
    $("#menu-toggle").toggle();
  };

}
