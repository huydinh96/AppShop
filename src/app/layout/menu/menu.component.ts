import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  title = 'abgular 4 with jquery';
  value = 0;
  constructor() { }
  ngOnInit() {
    $('.toggle').click(function () {
      $('.infoCart').slideToggle('slow');
    });
  }
  getProduct(value) {
    console.log(value);
  }
}
