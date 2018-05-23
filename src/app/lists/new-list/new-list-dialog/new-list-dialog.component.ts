import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ListService } from './../../../services/list.service';
import { List } from './../../../app.model';

@Component({
  selector: 'app-new-list-dialog',
  templateUrl: './new-list-dialog.component.html',
  styleUrls: ['./new-list-dialog.component.css']
})
export class NewListDialogComponent implements OnInit {
  myNewList: string;

  constructor(private dialogRef: MatDialogRef<NewListDialogComponent>, private listService: ListService) { }

  ngOnInit() {
  }

  save() {
    const list: List = {
      name: this.myNewList,
      active: false
    };
    this.listService.addList(list);
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

}
