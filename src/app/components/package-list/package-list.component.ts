var mockData = require('../..//mock/list.json');
import { Component, OnInit } from '@angular/core';

interface Hotel {
  name:string,
  start:number
}

interface Duration {
  day:string,
  night:string
}

interface Package {
  backgroundUrl:string,
  city:string,
  country:string,
  temperature:string,
  transport:string,
  hotel:Hotel,
  price:number
}

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {
  private packages:Package[]
  constructor() { 
    this.packages = mockData;
  }

  ngOnInit() {
  }

  count(length) {
    var result = new Array();
    for (let i = 0; i<length; i++){
      result.push(i);
    }
    return result;
  }

}
