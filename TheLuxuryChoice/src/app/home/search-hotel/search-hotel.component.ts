import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../../app.component';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {

  constructor(@Inject(forwardRef(() => AppComponent)) private main:AppComponent) { 
    
  }
  changeLanguage(language?:string){
    this.main.changeLanguage(language);
  }


  ngOnInit() {
  }

  menu_click(){
      $(".menu-button").toggleClass("change");
  }


}
