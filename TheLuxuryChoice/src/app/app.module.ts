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
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AboutComponent } from './components/about/about.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderSmComponent } from './components/header/header-sm/header-sm.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeMainComponent } from './components/home/home-main/home-main.component';
import { SearchHotelComponent } from './components/home/search/search-hotel/search-hotel.component';
import { SearchFligthComponent } from './components/home/search/search-fligth/search-fligth.component';
import { SearchPackagesComponent } from './components/home/search/search-packages/search-packages.component';
import { SearchActivitiesComponent } from './components/home/search/search-activities/search-activities.component';
import { HomeSearchComponent } from './components/home/search/home-search/home-search.component';
import { ActivityResultsComponent } from './components/home/results/activity-results/activity-results.component';
import { PackageDetailComponent } from './components/home/details/package-detail/package-detail.component';
import { HotelDetailComponent } from './components/home/details/hotel-detail/hotel-detail.component';
import { FooterSmComponent } from './components/footer-sm/footer-sm.component';
import { NewsComponent } from './components/news/news.component';
import { HotelResultsComponent } from './components/home/results/hotel-results/hotel-results.component';
import { HeaderComponent } from './components/header/header.component';


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
    HomeSearchComponent,
    HotelResultsComponent,
    HeaderComponent
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