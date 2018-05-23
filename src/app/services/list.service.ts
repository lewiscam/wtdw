import { Injectable } from '@angular/core';
import { List } from './../app.model';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  lists: AngularFirestoreCollection<List>;
  private listDoc: AngularFirestoreDocument<List>;

  constructor(private db: AngularFirestore) {
    this.lists = db.collection<List>('lists');
 }

 addList(task) {
  this.lists.add(task);
}

updateList(task) {
  this.listDoc = this.db.doc<List>(`lists/${task.id}`);
  this.listDoc.update(task);
}

deleteList(id) {
  this.listDoc = this.db.doc<List>(`lists/${id}`);
  this.listDoc.delete();
}

}
