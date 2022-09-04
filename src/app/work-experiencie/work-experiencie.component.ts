import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experiencie',
  templateUrl: './work-experiencie.component.html',
  styleUrls: ['./work-experiencie.component.css']
})
export class WorkExperiencieComponent implements OnInit {

  workExperience : Array<any> = [];

  constructor() { }

  ngOnInit(): void {

    let work1 = {
            fecha: "2022-2022",
            ubicacion: "Potrero Nuevo Ver.",
            puesto: "Repartidor",
            empresa: "Importadoras Joaquin",
            logros : [
                {descripcion : "Rutas completadas" },
                {descripcion : "Abastecer locales de productos antes de hora de apertura"}
            ]
    };

    let work2 = {
            fecha: "2021-2022",
            ubicacion: "Potrero Nuevo Ver.",
            puesto: "Tutor de regularizacion",
            empresa: "Conalep",
            logros : [
                {descripcion : "Aumento de remuneracion"},
                {descripcion : "Por cada alumno que se logre regularizar, recibera un compensacion extra"}
            ]
    };
    
    let work3 = {
            fecha: "2021-2022",
            ubicacion: "Potrero Nuevo Ver.",
            puesto: "Repartidor",
            empresa: "La Parrilla Game",
            logros : [
                {descripcion : "Rutas completadas" },
                {descripcion : "Abastecer locales de productos antes de hora de apertura"}
            ]
    };  

    let work4 = {
            fecha: "2021-2022",
            ubicacion: "Potrero Nuevo Ver.",
            puesto: "Desarrollador de Sistemas",
            empresa: "La parrilla Game",
            logros : [
                {descripcion : "Sistema en Linea" },
                {descripcion : "El sistema funciona estable y correctamente"}
            ]
    };          
    

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    this.workExperience.push(work3);
    this.workExperience.push(work4);

  }

}
