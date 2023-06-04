import { StatusElement } from 'src/app/models/StatusElement';
import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  element!: StatusElement;
option!: boolean;


constructor(
  public dialogRef: MatDialogRef<StatusElement>,
  @Inject(MAT_DIALOG_DATA) public data: StatusElement) {}


ngOnInit():void{}
}
