import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/guard.service';

import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';

// const routes: Routes = [
//  ];

const routes: Routes = [
    {
        path: "",
        redirectTo: "search",
        pathMatch: "full",
    },
    {
        path:"search",
        component: SearchComponent,
        canActivate: [AuthGuard]
    },
    {
        path:"login",
        component: LoginComponent
    },
    {
     path: "**",
     redirectTo: "search",
   }
]; 

export const routing = RouterModule.forRoot(routes);