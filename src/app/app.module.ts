import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatCardModule,
  MatDialogModule
 } from '@angular/material';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ListsComponent } from './lists/lists.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { NewListComponent } from './lists/new-list/new-list.component';
import { NewListDialogComponent } from './lists/new-list/new-list-dialog/new-list-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ListsComponent,
    TaskComponent,
    TaskFormComponent,
    NewListComponent,
    NewListDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [NewListDialogComponent]
})
export class AppModule { }
