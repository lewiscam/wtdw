import { Injectable } from '@angular/core';
import { List } from './../app.model';
import {
  AngularFirestoreDocument,
  AngularFirestore,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
import { AuthService, User } from './../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  lists: AngularFirestoreCollection<List>;
  private listDoc: AngularFirestoreDocument<List>;
  user: User;

  constructor(private db: AngularFirestore, private auth: AuthService) {
    auth.user.subscribe(user => {
      this.user = user;
      this.lists = db.collection<List>('lists', ref => ref.where('user', '==', user.uid));
    });
 }

 addList(task) {
    task.user = this.user.uid;
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
