import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../../../../app.component';
import { Hotel } from '../../../../models/hotel.model';
declare var $:any;
declare var jQuery:any;



@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {
  public destiny:number;
  public checkin:Date;
  public checkout:Date;
  public roomfor:number;

  constructor(@Inject(forwardRef(() => AppComponent)) private appComponent:AppComponent) { 
    
  }
  
  changeLanguage(language:string){
    this.appComponent.changeLanguage(language);
  }


  ngOnInit() {
  
  } 
  
  menu_click(){
    $(".menu-button").toggleClass("change");
    $('.main-nav, .menu-btn').toggleClass('active');
    
}

}


