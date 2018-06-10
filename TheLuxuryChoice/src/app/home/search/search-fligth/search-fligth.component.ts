import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../../../app.component';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-search-fligth',
  templateUrl: './search-fligth.component.html',
  styleUrls: ['./search-fligth.component.css']
})
export class SearchFligthComponent implements OnInit {

  constructor(@Inject(forwardRef(() => AppComponent)) private main:AppComponent) { 
    
  }
  changeLanguage(language?:string){
    this.main.changeLanguage(language);
  }


  ngOnInit() {
  }

  menu_click(){
    $(".menu-button").toggleClass("change");
    $('.main-nav, .menu-btn').toggleClass('active');
    
}

}
