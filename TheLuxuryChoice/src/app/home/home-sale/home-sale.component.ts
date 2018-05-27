import { Component, OnInit } from '@angular/core';
import { travel_package } from '../..//models/packages.model';
declare let $:any;
declare let jQuery:any;

@Component({
  selector: 'app-home-sale',
  templateUrl: './home-sale.component.html',
  styleUrls: ['./home-sale.component.css']
})
export class HomeSaleComponent implements OnInit {
  sales:Array<travel_package>;
  constructor() { }

  ngOnInit() {
    this.sales = travel_package.getDummySales();
  }

}
