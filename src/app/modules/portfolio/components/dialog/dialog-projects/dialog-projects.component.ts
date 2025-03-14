import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../models/projects.model';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
  ){}

  public getData = signal<IProjects | null>(null);

  public closeModal() {
    return this._dialogRef.close();
  }

  ngOnInit(): void {
    this.getData.set(this._data);
  }
}
