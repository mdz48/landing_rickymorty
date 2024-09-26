import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FunfactsComponent } from './components/funfacts/funfacts.component';
import { VideogameComponent } from './components/videogame/videogame.component';

export const routes: Routes = [
    {path: '', component:LandingComponent},
    {path: 'funfacs', component: FunfactsComponent},
    {path: 'videogame', component: VideogameComponent}
];
