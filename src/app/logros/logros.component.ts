import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {

  constructor() { }
  logros : Array<any> = []

  ngOnInit(): void {
    let l1 = {
      logro: "Certificacion 1 (2021)",
      descripcion : "Breve descripcion"
    }
    let l2 = {
      logro: "Certificacion 2 (2019)",
      descripcion : "Breve descripcion"
    }
    let l3 = {
      logro: "Certificacion 3 (2019)",
      descripcion : "Breve descripcion"
    }
    let l4 = {
      logro: "Certificacion 4 (2018)",
      descripcion : "Breve descripcion"
    }

    this.logros.push(l1);
    this.logros.push(l2);
    this.logros.push(l3);
    this.logros.push(l4);
  }

}
