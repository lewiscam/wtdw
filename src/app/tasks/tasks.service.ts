import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Task } from './../app.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private db: AngularFirestore) {
   }

  getTasksFromAfs(listId): Observable<any> {
    return this.db.collection('tasks', ref => ref.where('list', '==', listId)).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Task;
        const id = a.payload.doc.id;
        return { id, ...data };
        });
      });
  }
}
