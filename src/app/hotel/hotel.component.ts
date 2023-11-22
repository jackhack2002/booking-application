import { Component } from '@angular/core';

interface hotel {
  hotelName: any;
  Location: any;
  star: any;
  contact: any;
  ACnonAC: any;
}

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent {
  // hotelName: any;
  // Location: any;
  star: any;
  // contact: any;
  // ACnonAC: any;

  constructor(){
    this.star=4.5;
  }

  Hotel: hotel[] = [
    {hotelName : 'Accord Chrome',
    Location : 'India',
    star : 4.2,
    contact : 7882292,
    ACnonAC : 'AC'},
    {hotelName : 'Hotel Lakend',
    Location : 'India',
    star : 5,
    contact : 8945321,
    ACnonAC : 'Non AC'},
    {hotelName : 'Hotel Lakend',
    Location : 'India',
    star : 4,
    contact : 8445626,
    ACnonAC : 'AC'},
    {hotelName : 'Hotel Dodas Palace',
    Location : 'India',
    star : 2.8,
    contact : 7865941,
    ACnonAC : 'AC'},
    {hotelName : 'Udechee Huts',
    Location : 'India',
    star : 3,
    contact : 8645219,
    ACnonAC : 'Non AC'},
    {hotelName : 'Royal Villa Jaisalmer',
    Location : 'India',
    star : 4,
    contact : 7885642,
    ACnonAC : 'AC'},
    {hotelName : 'Bastian HomeStay',
    Location : 'India',
    star : 3.5,
    contact : 8264521,
    ACnonAC : 'Non AC'},
    {hotelName : `Philipkutty's Farm`,
    Location : 'India',
    star : 4.5,
    contact : 7625354,
    ACnonAC : 'AC'},
    {hotelName : 'Hotel Kanhaia Haveli',
    Location : 'India',
    star : 3,
    contact : 8652643,
    ACnonAC : 'AC'},
    {hotelName : 'Cherai Beach Residency',
    Location : 'India',
    star : 4,
    contact : 9576248,
    ACnonAC : 'Non AC'},
    

    
  ]

}
