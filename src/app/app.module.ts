import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { PackageListComponent } from './components/package-list/package-list.component';
import { PackageDetailComponent } from './components/package-detail/package-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PackageListComponent,
    PackageDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
