import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {routing, appRoutingProviders} from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import ngx-translate and the http loader
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { HeaderSmComponent } from './header-sm/header-sm.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeSaleComponent } from './home/home-sale/home-sale.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { SearchHotelComponent } from './home/search-hotel/search-hotel.component';
import { SearchFligthComponent } from './home/search-fligth/search-fligth.component';
import { SearchPackagesComponent } from './home/search-packages/search-packages.component';
import { SearchActivitiesComponent } from './home/search-activities/search-activities.component';
import { ActivityResultsComponent } from './home/activity-results/activity-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    AboutComponent,
    ErrorComponent,
    HeaderSmComponent,
    SignUpComponent,
    HomeSaleComponent,
    HomeMainComponent,
    SearchHotelComponent,
    SearchFligthComponent,
    SearchPackagesComponent,
    SearchActivitiesComponent,
    ActivityResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                              
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }),
    routing,
    NgbModule.forRoot()
  ],
  providers: [appRoutingProviders, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}