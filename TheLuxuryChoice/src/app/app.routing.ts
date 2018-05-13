import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//importar componentes
import {HomeComponent} from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
        {path:'', component:HomeComponent},
        {path:'home', component:HomeComponent},
        {path:'about', component:AboutComponent},
        {path:'**', component:ErrorComponent},
];

export const appRoutingProviders: any[] =[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);