import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Course } from '../table/table.component';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.css']
})
export class AddDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course
  ) {
    this.formulario = fb.group({
      name: new FormControl(),
      surname: new FormControl(),
      course: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  add(){
    this.dialogRef.close(this.formulario.value);
    console.log(this.formulario)
  }

  close(){
    this.dialogRef.close();
  }
}
