import { Routes } from '@angular/router';
import { HomePage } from './components/home-page/home-page';
import { Navbar } from './components/navbar/navbar';

export const routes: Routes = [

    {path: '', component: HomePage},
    
    { path: '**', redirectTo: '' ,pathMatch: 'full'} 
];
