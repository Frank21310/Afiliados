import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  radioValue = 'b';
  selectedValue = '';

  constructor() { }

  ngOnInit() {
  }

}
