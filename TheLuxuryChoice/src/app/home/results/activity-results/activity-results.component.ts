import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { AppComponent } from '../../../app.component';
declare var $:any;
declare var jQuery:any;



@Component({
  selector: 'app-activity-results',
  templateUrl: './activity-results.component.html',
  styleUrls: ['./activity-results.component.css']
})
export class ActivityResultsComponent implements OnInit {

  
  constructor(@Inject(forwardRef(() => AppComponent)) private appComponent:AppComponent) { 
    
  }
  changeLanguage(language:string){
    this.appComponent.changeLanguage(language);
  }


  ngOnInit() {
  
  } 
  
  // menu_click(){
  //     $(".menu-button").toggleClass("change");
  // }
  // buscar(){
  //   alert("buscar click");
  // }

  // menu_click() {
  //   $(".menu-button").toggleClass("change");
  // }

}
