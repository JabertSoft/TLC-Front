import { Component, OnInit, forwardRef, Inject } from '@angular/core';
import { AppComponent } from '../app.component';

declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
