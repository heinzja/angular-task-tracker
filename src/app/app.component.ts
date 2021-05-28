import { TaskI } from './task/task.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-task-tracker';
  taskList: TaskI[] = [];
  showAddTask: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  // Ran when the Add button is pressed
  onAdd():void {
    this.showAddTask = !this.showAddTask;
  }

  onFormDataEE(task:TaskI):void {
    console.log('task: ', task);

    this.taskList.push(task);
    console.log('taskList: ', this.taskList);
  }

  onTaskDelete(event: TaskI):void {
    console.log('onTaskDelete:', this.taskList);
    console.log('onTaskDelete:', this.taskList.lastIndexOf(event));
    this.taskList.splice(this.taskList.lastIndexOf(event), 1);
    console.log('onTaskDelete:', this.taskList);
  }
}
