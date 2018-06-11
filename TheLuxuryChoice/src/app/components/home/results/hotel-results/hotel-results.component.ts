import { Component, OnInit, Inject, forwardRef  } from '@angular/core';
import { AppComponent } from '../../../../app.component';
declare var $:any;
declare var jQuery:any;
@Component({
  selector: 'app-hotel-results',
  templateUrl: './hotel-results.component.html',
  styleUrls: ['./hotel-results.component.css']
})
export class HotelResultsComponent implements OnInit {

  constructor(@Inject(forwardRef(() => AppComponent)) private main:AppComponent) { }

  ngOnInit() {
  }

  changeLanguage(language?:string){
    this.main.changeLanguage(language);
  }
  
  menu_click(){
    $(".menu-button").toggleClass("change");
    $('.main-nav, .menu-btn').toggleClass('active');
    
}
}
