import { Component, OnInit } from '@angular/core';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
