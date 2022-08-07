import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog} from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

export interface Course {
  name: string;
  surname: string;
  course: string;
}

const ELEMENT_DATA: Course[] = [
  {name: 'Lionel', surname: 'Messi', course: 'A'},
  {name: 'Sergio', surname: 'Aguero', course: 'A'},
  {name: 'Angel', surname: 'Di Maria', course: 'A'},
  {name: 'Emiliano', surname: 'Martinez', course: 'B'},
  {name: 'Rodrigo', surname: 'De Paul', course: 'B'},
  {name: 'Nicolas', surname: 'Otamendi', course: 'C'},
  {name: 'Gonzalo', surname: 'Montiel', course: 'B'},
  {name: 'Paulo', surname: 'Dybala', course: 'A'},
  {name: 'Julian', surname: 'Alvarez', course: 'B'},
  {name: 'Nicolas', surname: 'Gonzalez', course: 'C'},
]

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'course', 'actions'];
  dataSource: MatTableDataSource<Course> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) table!: MatTable<Course>;

  constructor(private dialog: MatDialog) { 
  }

  ngOnInit(): void {
  }

  delete(elemento: Course){
    this.dataSource.data = this.dataSource.data.filter((curso: Course) => (curso.name != elemento.name || curso.course != elemento.course));
  }

  edit(elemento: Course){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '25%',
      data: elemento
    });

    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const item = this.dataSource.data.find(curso => curso.name === result.name);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = result;
        this.table.renderRows();
      }
    });
  }

  fontSizeTable : string = "20px";
}
