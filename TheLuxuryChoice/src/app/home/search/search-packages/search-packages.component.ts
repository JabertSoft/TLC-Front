import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../../../app.component';
declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-search-packages',
  templateUrl: './search-packages.component.html',
  styleUrls: ['./search-packages.component.css']
})
export class SearchPackagesComponent implements OnInit {

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
