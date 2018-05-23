import { Component, OnInit, Input } from '@angular/core';
import { Task } from './../../app.model';
import { TaskService } from './../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  editMode = false;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  edit(task) {
    this.editMode = true;
  }

 deleteTask(task) {
  this.taskService.deleteTask(task.id);
}

}
