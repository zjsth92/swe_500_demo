import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/guard.service';

import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';
import { PackageListComponent } from './components/package-list/package-list.component';
import { PackageDetailComponent } from './components/package-detail/package-detail.component';

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
        path:"list",
        component: PackageListComponent
    },
    {
        path:"detail",
        component: PackageDetailComponent
    },
    {
     path: "**",
     redirectTo: "search",
   }
]; 

export const routing = RouterModule.forRoot(routes);