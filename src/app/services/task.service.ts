import { Injectable } from '@angular/core';
import { Task } from './../app.model';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: AngularFirestoreCollection<Task>;
  private taskDoc: AngularFirestoreDocument<Task>;

  constructor(private db: AngularFirestore) {
    this.tasks = db.collection<Task>('tasks');
 }

 addTask(task) {
  this.tasks.add(task);
}

updateTask(task) {
  this.taskDoc = this.db.doc<Task>(`tasks/${task.id}`);
  this.taskDoc.update(task);
}

deleteTask(id) {
  this.taskDoc = this.db.doc<Task>(`tasks/${id}`);
  this.taskDoc.delete();
}

}
