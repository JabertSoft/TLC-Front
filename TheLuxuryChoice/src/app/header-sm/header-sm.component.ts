import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../app.component';
declare var $:any;
declare var jQuery:any;


@Component({
  selector: 'app-header-sm',
  templateUrl: './header-sm.component.html',
  styleUrls: ['./header-sm.component.css']
})
export class HeaderSmComponent implements OnInit {

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
