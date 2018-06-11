import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { HomeMainComponent } from './Components/home/home-main/home-main.component';
import { ErrorComponent } from './Components/error/error.component';
import { ContactFormComponent } from './Components/contact-form/contact-form.component';
import { AboutComponent } from './Components/about/about.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SearchHotelComponent } from './Components/home/search/search-hotel/search-hotel.component';
import { SearchFligthComponent } from './Components/home/search/search-fligth/search-fligth.component';
import { SearchPackagesComponent } from './Components/home/search/search-packages/search-packages.component';
import { SearchActivitiesComponent } from './Components/home/search/search-activities/search-activities.component';
import { ActivityResultsComponent } from './Components/home/results/activity-results/activity-results.component';
import { PackageDetailComponent } from './Components/home/details/package-detail/package-detail.component';
import { HotelDetailComponent } from './Components/home/details/hotel-detail/hotel-detail.component';
import { NewsComponent } from './Components/news/news.component';


const appRoutes: Routes = [
        {
                path: '', component: HomeMainComponent,
                children: [
                        { path: '', component: SearchHotelComponent },
                        { path: 'hotel', component: SearchHotelComponent },
                        { path: 'hotel-detail/:id', component: HotelDetailComponent },
                        { path: 'fligth', component: SearchFligthComponent },
                        { path: 'packages', component: SearchPackagesComponent },
                        { path: 'package-detail/:id', component: PackageDetailComponent },
                        { path: 'activities', component: SearchActivitiesComponent },
                        { path: 'activity-results', component: ActivityResultsComponent }
                ]
        },
        {
                path: 'home', component: HomeMainComponent,
                children: [
                        { path: '', component: SearchHotelComponent },
                        { path: 'hotel', component: SearchHotelComponent },
                        { path: 'hotel-detail/:id', component: HotelDetailComponent },
                        { path: 'fligth', component: SearchFligthComponent },
                        { path: 'packages', component: SearchPackagesComponent },
                        { path: 'package-detail/:id', component: PackageDetailComponent },
                        { path: 'activities', component: SearchActivitiesComponent },
                        { path: 'activity-results', component: ActivityResultsComponent }
                ]
        },
        { path: 'contact-form', component: ContactFormComponent },
        { path: 'about', component: AboutComponent },
        { path: 'news', component: NewsComponent},
        { path: 'signup', component: SignUpComponent },
        { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);