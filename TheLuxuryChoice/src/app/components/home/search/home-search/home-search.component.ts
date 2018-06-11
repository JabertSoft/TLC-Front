import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../../../../app.component';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

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

