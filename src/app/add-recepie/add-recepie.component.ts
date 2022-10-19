import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-recepie',
  templateUrl: './add-recepie.component.html',
  styleUrls: ['./add-recepie.component.css']
})
export class AddRecepieComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  description=""
  flavour=""
  colour=""

  readValues=()=>{
    let data ={
      "name":this.name,
      "description":this.description,
      "flavour":this.flavour,
      "colour":this.colour
    }
    console.log(data)
    this.myapi.addRecepie(data).subscribe(
      (data)=>{
        alert("successfully added")
      }
    )

  }

  ngOnInit(): void {
  }

}
