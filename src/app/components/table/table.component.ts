import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  surname: string;
  course: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Lionel', surname: 'Messi', course: 'H'},
  {name: 'Sergio', surname: 'Aguero', course: 'H'},
  {name: 'Angel', surname: 'Di Maria', course: 'H'},
  {name: 'Emiliano', surname: 'Martinez', course: 'H'},
  {name: '', surname: '', course: ''},
  {name: '', surname: '', course: ''},
  {name: '', surname: '', course: ''},
  {name: '', surname: '', course: ''},
  {name: '', surname: '', course: ''},
  
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name', 'surname', 'course'];
  dataSource = ELEMENT_DATA;
}
