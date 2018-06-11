import { Component, OnInit, OnDestroy, Inject, forwardRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../../../app.component';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  
  constructor( @Inject(forwardRef(() => AppComponent)) private main:AppComponent,private route: ActivatedRoute) { }
  changeLanguage(language?:string){
    this.main.changeLanguage(language);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  menu_click() {
    $(".menu-button").toggleClass("change");
    $('.main-nav, .menu-btn').toggleClass('active');
  }
}
