import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// import ngx-translate and the http loader
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { CookieService } from 'ngx-cookie-service';

//RUTAS
import {routing, appRoutingProviders} from './app.routing';

//SERVICIOS


//COMPONENTES
import { AppComponent } from './app.component';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { HeaderSmComponent } from './Components/header/header-sm/header-sm.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HomeMainComponent } from './Components/home/home-main/home-main.component';
import { SearchHotelComponent } from './Components/home/search/search-hotel/search-hotel.component';
import { SearchFligthComponent } from './Components/home/search/search-fligth/search-fligth.component';
import { SearchPackagesComponent } from './Components/home/search/search-packages/search-packages.component';
import { SearchActivitiesComponent } from './Components/home/search/search-activities/search-activities.component';
import { ActivityResultsComponent } from './Components/home/results/activity-results/activity-results.component';
import { PackageDetailComponent } from './Components/home/details/package-detail/package-detail.component';
import { HotelDetailComponent } from './Components/home/details/hotel-detail/hotel-detail.component';
import { FooterSmComponent } from './Components/footer-sm/footer-sm.component';
import { NewsComponent } from './Components/news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeMainComponent,
    AboutComponent,
    ErrorComponent,
    HeaderSmComponent,
    SignUpComponent,
    HomeMainComponent,
    SearchHotelComponent,
    SearchFligthComponent,
    SearchPackagesComponent,
    SearchActivitiesComponent,
    ActivityResultsComponent,
    PackageDetailComponent,
    HotelDetailComponent,
    ContactFormComponent,
    FooterSmComponent,
    NewsComponent,
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