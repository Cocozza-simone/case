import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EntraComponent } from './entra/entra.component';


export const routes: Routes = [
    
    { path: 'home', component: HomeComponent },
    { path: 'entra', component: EntraComponent  },

];
