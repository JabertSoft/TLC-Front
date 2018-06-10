import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    $('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    autoplay: false,
    autoplayHoverPause: true,
    margin: 0,
    stagePadding: 0,
    responsive: {
                  0: {items: 1},
                  768: {items: 2},
                  992: {items: 3}
                }
})
  }

}
