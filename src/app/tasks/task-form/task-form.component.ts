import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { Task } from './../../app.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() listId: string;
  @Input() myTask: Task = {
    description: '',
    id: ''
  };
  @Input() editMode = false;
  taskToEdit: any = {};

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  saveTask() {
    if (this.myTask !== null) {
       const task: Task = {
          description: this.myTask.description,
          complete: false,
          list: this.listId
       };
       if (!this.editMode) {
          this.taskService.addTask(task);
       } else {
         task.id = this.myTask.id;
          this.taskService.updateTask(task);
       }
       this.editMode = false;
    }
 }

}
