import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { List } from './../app.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from './../core/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private db: AngularFirestore) {
   }

  getListsFromAfs(user?: User): Observable<any> {
    return this.db.collection('lists', ref => ref.where('user', '==', user.uid)).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as List;
        const id = a.payload.doc.id;
        return { id, ...data };
        });
      });
  }
}
