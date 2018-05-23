import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { List } from './../app.model';
import { ListsService } from './lists.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[] = [];

  constructor(private listsService: ListsService) { }

  ngOnInit() {
    this.listsService.getListsFromAfs().subscribe(data => {
      this.lists.push(...data);
    });
  }

}
