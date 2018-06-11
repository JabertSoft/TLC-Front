import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../../../app.component';
declare var $:any;
declare var jQuery:any;


@Component({
  selector: 'app-header-sm',
  templateUrl: './header-sm.component.html',
  styleUrls: ['./header-sm.component.css']
})
export class HeaderSmComponent implements OnInit {

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
