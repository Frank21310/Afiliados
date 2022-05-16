import { Component, OnInit } from '@angular/core';

interface Person {
  clave: string;
  nombre: string;
  edad: number;
  direccion: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']

})

export class ConsultaComponent implements OnInit {


  Lista: Person[] = [
    {
      clave: '1',
      nombre: 'John Brown',
      edad: 32,
      direccion: 'New York No. 1 Lake Park'
    },
    {
      clave: '2',
      nombre: 'Jim Green',
      edad: 42,
      direccion: 'London No. 1 Lake Park'
    },
    {
      clave: '3',
      nombre: 'Joe Black',
      edad: 32,
      direccion: 'Sidney No. 1 Lake Park'
    }
  ];


  constructor() { }

  ngOnInit() {
  }


}
