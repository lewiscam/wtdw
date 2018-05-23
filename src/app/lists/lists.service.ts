import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { List } from './../app.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private db: AngularFirestore) { }

  getListsFromAfs(): Observable<any> {
    return this.db.collection('lists').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as List;
        const id = a.payload.doc.id;
        return { id, ...data };
        });
      });
  }
}
