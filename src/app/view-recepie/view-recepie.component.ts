import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-recepie',
  templateUrl: './view-recepie.component.html',
  styleUrls: ['./view-recepie.component.css']
})
export class ViewRecepieComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchRecepie()
   }

  fetchRecepie=()=>{
    this.myapi.viewRecepie().subscribe(
      (data)=>{
        this.viewRecepie=data
      }    )
  }

  viewRecepie:any=[]
  ngOnInit(): void {
  }

}
