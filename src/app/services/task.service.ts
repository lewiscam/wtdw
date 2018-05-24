import { Injectable } from '@angular/core';
import { Task } from './../app.model';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AuthService, User } from './../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: AngularFirestoreCollection<Task>;
  user: User;
  private taskDoc: AngularFirestoreDocument<Task>;

  constructor(private db: AngularFirestore, private auth: AuthService) {
    auth.user.subscribe(user => {
      this.user = user;
      this.tasks = db.collection<Task>('tasks', ref => ref.where('user', '==', user.uid));
    });
 }

 addTask(task) {
    task.user = this.user.uid;
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
