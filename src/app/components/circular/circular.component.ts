import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.scss']
})
export class CircularComponent implements OnInit {
  imagen = 'https://d1uz88p17r663j.cloudfront.net/resized/1ab9dd088418a1c446377d024de0e3ca_HAMBURGUESA_1200_600.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
