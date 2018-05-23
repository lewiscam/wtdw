import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { NewListDialogComponent } from './new-list-dialog/new-list-dialog.component'

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(NewListDialogComponent, dialogConfig);
  }

}
