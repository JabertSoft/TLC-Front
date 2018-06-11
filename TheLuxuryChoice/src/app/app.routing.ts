import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { HomeMainComponent } from './home/home-main/home-main.component';
import { ErrorComponent } from './error/error.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchHotelComponent } from './home/search/search-hotel/search-hotel.component';
import { SearchFligthComponent } from './home/search/search-fligth/search-fligth.component';
import { SearchPackagesComponent } from './home/search/search-packages/search-packages.component';
import { SearchActivitiesComponent } from './home/search/search-activities/search-activities.component';
import { ActivityResultsComponent } from './home/results/activity-results/activity-results.component';
import { PackageDetailComponent } from './home/details/package-detail/package-detail.component';
import { HotelDetailComponent } from './home/details/hotel-detail/hotel-detail.component';
import { NewsComponent } from './news/news/news.component';
import { HomeSearchComponent } from './home/search/home-search/home-search.component';


const appRoutes: Routes = [
        {
                path: '', component: HomeMainComponent,
                children: [
                        { path: '', component: HomeSearchComponent },
                        { path: 'hotel', component: HomeSearchComponent },
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
                        { path: '', component: HomeSearchComponent },
                        { path: 'hotel', component: HomeSearchComponent },
                        { path: 'hotel-detail/:id', component: HotelDetailComponent },
                        { path: 'fligth', component: SearchFligthComponent },
                        { path: 'packages', component: SearchPackagesComponent },
                        { path: 'package-detail/:id', component: PackageDetailComponent },
                        { path: 'activities', component: SearchActivitiesComponent },
                        { path: 'activity-results', component: ActivityResultsComponent }
                ]
        },
        { path: 'contact', component: ContactFormComponent },
        { path: 'about', component: AboutComponent },
        { path: 'news', component: NewsComponent},
        { path: 'signup', component: SignUpComponent },
        { path: '**', component: ErrorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);