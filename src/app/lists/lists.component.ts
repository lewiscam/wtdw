import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Observable/forkJoin';
import { List } from './../app.model';
import { ListsService } from './lists.service';
import { AuthService } from './../core/auth.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[] = [];

  constructor(private listsService: ListsService, private auth: AuthService) { }

  ngOnInit() {
    this.getLists();
  }

  getLists() {
    this.auth.user.subscribe(user => {
      this.listsService.getListsFromAfs(user).subscribe(data => {
        this.lists.length = 0;
        this.lists.push(...data);
      });
    });
  }
}
