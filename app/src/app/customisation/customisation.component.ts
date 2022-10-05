import { Component, OnInit } from '@angular/core';
// import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-customisation',
  templateUrl: './customisation.component.html',
  styleUrls: ['./customisation.component.css']
})
export class CustomisationComponent implements OnInit {

  suv: boolean = false;
  sedan: boolean = false;
  hatch: boolean = false;
  pickup: boolean = false;

  white: boolean = false;
  green: boolean = false;
  blue: boolean = false
  black: boolean = false;
  red: boolean = false;
  yellow: boolean = false;

  carType: string = "";
  carColor: string = "";

  // constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  info() {
    window.alert("This customisation will allow you to see the different models of car wrapped in different color from different angle. Car color seen in 3d models might be different from real life. Also, you can see whole car wrapped with the color you chose.")
  }

  carModel(newValue: any) {
    if (this.carType == "suv") {
      this.sedan = false;
      this.hatch = false;
      this.pickup = false;
      this.suv = true;
    } else if (this.carType == "sedan") {
      this.hatch = false;
      this.pickup = false;
      this.suv = false;
      this.sedan = true;
    } else if (this.carType == "hatch") {
      this.sedan = false;
      this.pickup = false;
      this.suv = false;
      this.hatch = true;
    } else if (this.carType == "pickup") {
      this.sedan = false;
      this.hatch = false;
      this.suv = false;
      this.pickup = true;
    } else {
      this.sedan = false;
      this.hatch = false;
      this.suv = false;
      this.pickup = false;
    }
  }

  color(value: any) {
    if (this.carColor == "red") {
      this.white = false;
      this.green = false;
      this.blue = false;
      this.black = false;
      this.red = true;
      this.yellow = false;
    } else if (this.carColor == "yellow") {
      this.white = false;
      this.green = false;
      this.blue = false;
      this.black = false;
      this.red = false;
      this.yellow = true;
    } else if (this.carColor == "white") {
      this.white = true;
      this.green = false;
      this.blue = false;
      this.black = false;
      this.red = false;
      this.yellow = false;
    } else if (this.carColor == "green") {
      this.white = false;
      this.green = true;
      this.blue = false;
      this.black = false;
      this.red = false;
      this.yellow = false;
    } else if (this.carColor == "blue") {
      this.white = false;
      this.green = false;
      this.blue = true;
      this.black = false;
      this.red = false;
      this.yellow = false;
    } else if (this.carColor == "black") {
      this.white = false;
      this.green = false;
      this.blue = false;
      this.black = true;
      this.red = false;
      this.yellow = false;
    } else {
      this.white = false;
      this.green = false;
      this.blue = false;
      this.black = false;
      this.red = false;
      this.yellow = false;
    }
  }

}






  // suv: any = [
  //   {
  //     "id": 1,
  //     "src": "https://sketchfab.com/models/10f799e0228d4720837b10746fb7669b/embed?autostart=1&camera=0"
  //   },
  //   {
  //     "id": 2,
  //     "src": "https://sketchfab.com/models/a099126d9ee94f88a0644185066b0e9b/embed?autostart=1&camera=0"
  //   },
  //   {
  //     "id": 3,
  //     "src": "https://sketchfab.com/models/1080df64d0ef420588e23ae073df1cb3/embed?autostart=1&camera=0"
  //   },
  //   {
  //     "id": 4,
  //     "src": "https://sketchfab.com/models/a2b438e0184644319dde1d10f672a126/embed?autostart=1&camera=0"
  //   },
  //   {
  //     "id": 5,
  //     "src": "https://sketchfab.com/models/edc994ad28ed438cb365c0e0389ac177/embed?autostart=1&camera=0&transparent=1"
  //   },
  //   {
  //     "id": 6,
  //     "src": "https://sketchfab.com/models/22a19e8cc47c4d8489f820b8529924ea/embed?autostart=1&camera=0"
  //   }
  // ]