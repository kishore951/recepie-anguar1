import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-recepie',
  templateUrl: './add-recepie.component.html',
  styleUrls: ['./add-recepie.component.css']
})
export class AddRecepieComponent implements OnInit {

  constructor() { }

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
  }

  ngOnInit(): void {
  }

}
