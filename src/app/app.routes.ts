import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';

// const routes: Routes = [
//  ];

const routes: Routes = [
    {
        path: "",
        redirectTo: "search",
        pathMatch: "full"
    },
    {
        path:"search",
        component: SearchComponent
    },
    {
     path: "**",
     redirectTo: "search",
   }
]; 

export const routing = RouterModule.forRoot(routes);