import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../table/table.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course
  ) {
    this.formulario = fb.group({
      nombre: new FormControl(data.name),
      apellido: new FormControl(data.surname),
      curso: new FormControl(data.course)
    })
  }

  ngOnInit(): void {
  }

  update(){
    this.dialogRef.close(this.formulario.value);
  }

  close(){
    this.dialogRef.close();
  }

}
