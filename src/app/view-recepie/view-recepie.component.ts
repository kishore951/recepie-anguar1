import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-recepie',
  templateUrl: './view-recepie.component.html',
  styleUrls: ['./view-recepie.component.css']
})
export class ViewRecepieComponent implements OnInit {

  constructor() { }

  viewRecepie=[{"id":1,"name":"maggie","description":"fast food","flavour":"spicy food","colour":"yellow"},{"id":2,"name":"pizza","description":"tasty","flavour":"hot","colour":"brown"},{"id":3,"name":"burger","description":"tasty","flavour":"spicy","colour":"brown"},{"id":4,"name":"wings","description":"fried","flavour":"spicy","colour":"yellow"}]

  ngOnInit(): void {
  }

}
