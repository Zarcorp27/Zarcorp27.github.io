import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intereses',
  templateUrl: './intereses.component.html',
  styleUrls: ['./intereses.component.css']
})
export class InteresesComponent implements OnInit {

  intereses : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    let in1 = {
      interes: "Videojuegos"
    };
    let in2 = {
      interes: "Novelas ligeras"
    };
    let in3 = {
      interes: "Manga"
    };
    let in4 = {
      interes: "Programacion"
    };
    let in5 = {
      interes: "Mecanica"
    };
    let in6 = {
      interes: "Futbol"
    };

    this.intereses.push(in1);
    this.intereses.push(in2);
    this.intereses.push(in3);
    this.intereses.push(in4);
    this.intereses.push(in5);
    this.intereses.push(in6);
  }

}
