import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var mockData = require('../../mock/detail.json');


interface City {
  city: string,
  country: string,
  imageUrl: string,
  region: string,
  temp_average_C: number,
  temp_average_F: number
}

interface Hotel {
  name:string,
  class:number,
  price:number,
  photo_url:string
}

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent implements OnInit {

  private cityInfo: City;
  private descriptionHtml:string;
  private price:string;
  private hotels:Hotel[];

  constructor(private http: Http) { }

  ngOnInit() {
    this.descriptionHtml = mockData.description;
    this.cityInfo = mockData.cityInfo
    this.price = mockData.price;
    this.hotels = mockData.hotels
  }
  
  handleError(error) {
    console.error(error);
  }

}
